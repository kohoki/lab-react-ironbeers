import React from 'react'
import {Link} from 'react-router-dom'
import beers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeers from '../assets/new-beer.png'


function Home() {
  return (
    <div className="container" style={{marginTop: '50px', display: 'flex', justifyContent: 'space-around'}}>

        <Link to="/Beers" style={{textDecoration: 'none',color: 'inherit'}}>
            <div className="card" style={{width: '18rem'}}>
                <img src={beers} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">All Beers</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </Link>

        <Link to="/random-beer" style={{textDecoration: 'none',color: 'inherit'}}>
            <div className="card" style={{width: '18rem'}}>
                <img src={randomBeer} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Random Beer</h5>
                    <p className="card-text">Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                </div>
            </div>
        </Link>

        <Link to="/new-beer" style={{textDecoration: 'none',color: 'inherit'}}>
            <div className="card" style={{width: '18rem'}}>
                <img src={newBeers} className="card-img-top" alt="..."/>
                <div className="card-body">

                
                    <h5 className="card-title">New Beer</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus tellus enim, nec condimentum dolor suscipit id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed semper eros at dui dignissim, a semper ante commodo. Suspendisse potenti. Suspendisse tristique tortor nec urna consequat, eu consequat.</p>
                </div>
            </div>
        </Link>

    </div>
  )
}

export default Home