import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LocationItem from './LocationItem';

const Locations = () => {

    const [location, setLocation] = useState({})
    const [id, setId] = useState("") 

        useEffect(() => {
        const random = Math.floor(Math.random()*126)+1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then((res) => setLocation(res.data))
    }, [])
    console.log(location)

    const searchType = () => {
        console.log(id);
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then((res) => setLocation(res.data))
    }

    return (
        <div className="general">
            <div className="header">
                <img className='img-bck' src="./img/image2.png" alt="bck2" />
            </div>
                <div className="searcher">
                    <div className="browser">
                        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
                        <button className="btn" onClick={searchType}><i className="fa-brands fa-searchengin"></i></button>
                    </div>
                </div>
                <div className="body">
                    <div className="location-information">
                        <h1>Name: {location.name}</h1>
                        <h2>Dimension: {location.dimension}</h2>
                        <h2>Type: {location.type}</h2>
                        <h2>Residents: {location.residents?.length}</h2>
                        <h2>Id Location: {location.id}</h2>
                    </div>
                    <ul>
                        {location.residents?.map(resident => (
                            <LocationItem url={resident} key={resident} />
                        ))}
                    </ul>
                </div>
            
        </div>
    );
};

export default Locations;
