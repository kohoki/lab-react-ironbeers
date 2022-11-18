import NavBar from './NavBar'
import { useParams, Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios";

function NewBeer() {

  const [name, setNewName] = useState('')
  const [tagline , setNewTagline] = useState('')
  const [description , setNewDescription] = useState('')
  const [first_brewed , setNewFirst_brewed] = useState('')
  const [brewers_tips , setNewBrewers_tips] = useState('')
  const [attenuation_level, setNewAttenuation_level] = useState(0)
  const [contributed_by , setNewContributed_by] = useState('')
  

  const handleSubmit = event =>{
        
    event.preventDefault();
    const NewBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
    //console.log(NewBeer)
    
    setNewName('')
    setNewTagline('')
    setNewDescription('')
    setNewFirst_brewed('')
    setNewBrewers_tips('')
    setNewAttenuation_level(0)
    setNewContributed_by('')
}  


  return (
    <div className="container" style={{marginTop: '50px', width: '60%'}}>
      <NavBar />
      <form style={{marginTop: '30px',display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px'}}>
        <div className="col-sm-3">
          <input type="text" className="form-control"  placeholder="Name" />
        </div>

        <div className="col-sm-3">
          <input type="text" className="form-control"  placeholder="Tagline" />
        </div>

        <div className="col-sm-3">
          <textarea type="text" className="form-control"  placeholder="Description" rows="4"/>
        </div>

        <div className="col-sm-3">
          <input type="text" className="form-control"  placeholder="First brewed" />
        </div>

        <div className="col-sm-3">
          <input type="text" className="form-control"  placeholder="Brewers tips" />
        </div>

        <div className="col-sm-3">
          <input type="number" className="form-control"  placeholder="Attenuation Level" />
        </div>

        <div className="col-sm-3">
          <input type="text" className="form-control"  placeholder="Contributed by" />
        </div>
        
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  )
}
export default NewBeer