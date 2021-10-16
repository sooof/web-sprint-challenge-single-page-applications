import React, { useState, useEffect } from 'react'
// We'll need a Link and the useRouteMatch hook from 'react-router-dom'
import { Link, useRouteMatch } from 'react-router-dom';
import dataLeat from './data'

function fetchLeatStock() {
    // fetchStock simulates getting data through axios.get(<URL>)
    return Promise.resolve({ success: true, dataLeat })
  }


export default function ItemsList(props) {
    const [items, setItems] = useState([])

//   const { items } = props


  useEffect(() => {
    
    fetchLeatStock().then(res => {
      console.log("App setStockLeat res.data = ", res.dataLeat)
      setItems(res.dataLeat)
    })
  }, [])
  
  console.log("App setStockLeat = ", items)

  // We'll grab the current URL using the hook
  // const { url } = useRouteMatch();
  const  url  = useRouteMatch().url;
  console.log("ItemsList props = ", props, " url = ", url)

  // if (!items.length) return 'Getting your item...';
  if (!items) return <h2>Oh no not fount..</h2>;
  return (
    <div className='container'>
        <h1>Date LIST</h1>
      {items.map(item => (
        <div
          className='item-card'
          key={item.id}
        >
          <Link to={`${url}/${item.id}`}>
            <p>{item.name}</p>
          </Link>
          {/* Link ends */}

          <p>{item.size}</p>
          <p>{item.topping1}</p>
          <p>{item.topping2.map( (e)=> e +'# ' )}</p>
          <p>{item.special}</p>
        </div>
      ))}
    </div>
  )
}
