// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL } from '../constants'
import styled from 'styled-components'

export default function Character(props) {
    console.log('props: ' + JSON.stringify(props));
    const { starwarsCharacterId } = props
    // const [starwarsCharacter, setStarwarsCharacter] = useState(null)

    // useEffect(() => {
    //     console.log(`📲 GETTING DETAILS FOR FRIEND WITH ID ${starwarsCharacterId}`)
    //     axios.get(`${BASE_URL}/people/${starwarsCharacterId}?api_key=${API_KEY}`)
    //         .then(res => {
    //             setStarwarsCharacter(res.data)
    //         })
    //         .catch(err => {
    //             debugger
    //         })
    //     return () => {
    //         console.log(`📲 THE OLD ID WAS ${starwarsCharacterId}`)
    //     }
    // }, [starwarsCharacterId])
    const displayKeys = ['gender', 'height', 'mass'];
    console.log(props);
    const displayCharacters = displayKeys.map(k => props[k]);
    console.log('displayKeys: ' + displayKeys);
    console.log('displayCharacters: ' + displayCharacters);

    return (
        <div className='character-container'>
            <h2>{props.name}</h2>
            <div className='character-info'>
                <ul>
                    {
                        displayKeys.map((k, idx) => {
                            return<li key={k}>{k}:{' '}{displayCharacters[idx]}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}