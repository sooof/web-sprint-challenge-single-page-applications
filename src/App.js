
import React, { useState, useEffect } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import ItemsList from './components/ItemsList'
import BuildPizza from './components/BuildPizza'
import Delivering from './components/Delivering'
// Dummy data
import data from './data'
import dataLeat from './components/data'
import DataList from './components/Datalist'

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

function fetchLeatStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, dataLeat })
}


export default function App(props){
  const [stock, setStock] = useState([])
  const [stockLeat, setStockLeat] = useState([])


  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])
  
  console.log("App stock = ", stock)
  
  
  useEffect(() => {
    
    fetchLeatStock().then(res => {
      console.log("App setStockLeat res.data = ", res.dataLeat)
      setStockLeat(res.dataLeat)
    })
  }, [])
  
  console.log("App setStockLeat = ", stockLeat)

  return (
    <div className='App'>
      <nav className='App-header'>
          <h1>Lambda Eats</h1>
          
          <div className='App-link'>
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Order</Link>
            <Link to='/date-list'>Data</Link>
            <Link to='/items-list'>Help</Link>
          </div>
      </nav>
    
      <Switch>
        <Route exact path='/'>
          <Home stock={stock}/>
        </Route>
        {/* <Route path={'/items-list/:id'}>
            <Item items={stock} />
        </Route> */}
        <Route path='/pizza'> 
            <BuildPizza />
        </Route >
        <Route path='/items-list'> 
          <ItemsList items={stock}/>
        </Route >

        <Route path='/date-list'> 
          <DataList items={stockLeat}/>
        </Route >

        <Route path='/delivering'>
          <Delivering />
        </Route>
      </Switch>
      
    </div>
 
  );
};