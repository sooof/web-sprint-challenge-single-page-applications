import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import { useHistory } from 'react-router-dom';

export default function BuildPizza(props) {
  const { text } = props

  const history = useHistory();

  const routeToDeliver = () => {
    history.push("./delivering")
  }

  return (
    <div className='container' >
      {/* <p className='item-details'>{text}</p> */}
      {
        <section id="homeBg" class="bg-img">
        </section>
      }

        <form className='form container' >
            <h1>Build Your Own Pizza</h1>


           
                <button  onClick={routeToDeliver}>Add to Order</button>
            
        </form>
    </div>
  )
}
