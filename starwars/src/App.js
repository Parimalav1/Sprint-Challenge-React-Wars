import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BASE_URL } from './constants'
import './App.css';
import Character from './components/Character'
// import SearchBar from './SearchBar'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [peopleData, setPeopleData] = useState([]);


  useEffect(() => {
    const fetchPeopleData = () => {
      axios.get(`${BASE_URL}/people/`)
        .then((res) => {
          setPeopleData(res.data)
        })
        .catch(err => {
          debugger
          // let dummydata = {

          // }
          // setPeople(dummydata);
        })
    }
    fetchPeopleData();
  }, [])

  if (!peopleData.count) {
    return <h1>Loading...</h1>;
  }

  console.log('peopleData:' + JSON.stringify(peopleData));
  return (
    <div className='home'>
      <div className="App">
        <h1 className="Header">Characters</h1>
      </div>
      {/* <SearchBar/> */}
      {
        peopleData.results.map((x) => {
          console.log('x = ' + JSON.stringify(x));
          return <Character {...x}/>
        })
      }
    </div>
  );
}

export default App;
