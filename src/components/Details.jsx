
import NavBar from './NavBar'
import { useParams, Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios";

function Details() {
    const { id } = useParams();
    // console.log("ID:",id)
    const [beer, setBeer] = useState([]);

    useEffect(()=>{
      const fetchBeers = async () =>{
        let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
        console.log(response.data)
        setBeer(response.data)
      }
      fetchBeers()
  
    }, []);


  return (
    <div className="container" style={{marginTop: '50px'}}>
        <NavBar/>

        <div className="container" style={{marginTop: '50px'}}>
        <div className="card" style={{width: '18rem'}}>
                <img src={beer.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{beer.name} </h5>
                    <h6>Level: {beer.attenuation_level}</h6>
                    <p>{beer.tagline}</p>
                    <p className="card-text">{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Details