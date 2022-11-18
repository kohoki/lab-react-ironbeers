import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from "axios";
import {Link} from 'react-router-dom'


function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(()=>{
    const fetchBeers = async () =>{
      let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      //console.log(response.data)
      setBeers(response.data)
    }
    fetchBeers()

  }, []);
  console.log(beers)


  return (
    <div className="container" style={{marginTop: '50px'}}>
      
      <NavBar/>
      <div className="container" style={{marginTop: '50px', display: 'flex',flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {beers.map((beer) =>
        {
          return(
            <Link key= {beer._id} to="/" style={{textDecoration: 'none',color: 'inherit', marginBottom: '50px'}}>
            <div className="card" style={{width: '18rem'}}>
                <img src={beer.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{beer.name}</h5>
                    <p className="card-text">{beer.description}</p>
                </div>
            </div>
          </Link>
          )
        })}
        </div>    
    </div>
  )
}

export default Beers