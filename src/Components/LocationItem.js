import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LocationItem = ({url}) => {

    const [ character, setCharacter ] = useState({})

    useEffect(() => {
        axios.get(url)
        .then(res => setCharacter(res.data))
    }, [url, character])

    return (
        <li>
            <div className='card'>
                <div className="card-content">
                    <div className='card-img'>
                        <img src={character.image} alt="" />
                    </div>
                    <div className="card-text">
                        <h1><b>Name: </b> {character.name}</h1>
                        <p><b>Status: </b>{character.status}</p>
                        <p><b>Origin: </b>{character.origin?.name}</p>
                        <p><b>Episodes: </b>{character.episode?.length}</p>
                    </div>
                </div>    
            </div>
        </li>
    );
};

export default LocationItem;