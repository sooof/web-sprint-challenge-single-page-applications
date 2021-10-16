import React from 'react'

import { useHistory } from 'react-router-dom';
import ItemsList from './ItemsList'

export default function Home(props) {
 const {stock} = props
  const history = useHistory();

  const routeToShop = () => {
    history.push("./pizza")
  }

  return (
    <div className='home-wrapper'>
        {/* <h1>Home Test</h1> */}
        <section id="homeBg" class="bg-img">
            <div>
                <h1>Your favorite, delivered while coding </h1>
                <button onClick={routeToShop} className='md-button' >Order Pizza</button>
            </div>
        </section>

      {/* <img
        className='home-image'
        src='/Assets/Pizza.jpg'
        alt='Pizza'
      />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Shop now!
      </button> */}
<h2>Food Delivery in Gotham City</h2>
 
{
    <ItemsList items={stock}/>
  
}


    </div>
  )
}
