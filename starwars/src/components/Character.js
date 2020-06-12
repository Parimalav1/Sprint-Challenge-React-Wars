// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL } from '../constants'
import styled from 'styled-components'

export default function Character(props) {
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
    const displayKeys = ['name', 'gender', 'height', 'mass'];
    const displayCharacters = [];
    const displayValues = displayKeys.map((key, idx) => {
        displayCharacters.push(`<li key=${idx} value=${props.key} />`);
    });

    return (
        <div className='character-container'>
            <h2>{props.name}</h2>
            <div className='character-info'>
                <ul>
                    {
                        displayKeys.map((key, idx) => {
                            <li key={idx}>{props.key}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}