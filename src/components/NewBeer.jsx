import NavBar from './NavBar'
import { useParams, Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios";

function NewBeer() {

  const [name, setNewName] = useState('')
  const [image, setNewImage] = useState('')
  const [calories, setNewCalories] = useState(0)
  const [servings, setNewServings] = useState(0)

  const handleSubmit = event =>{
        
    event.preventDefault();
    const NewBeer = {name, image, calories, servings}
    //console.log(NewFood)
    
    setNewName('')
    setNewImage('')
    setNewCalories(0)
    setNewServings(0)
}  


  return (
    <div className="container" style={{marginTop: '50px'}}>
      <NavBar/>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
export default NewBeer