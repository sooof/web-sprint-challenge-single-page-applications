
import React, { useState, useEffect } from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import axios from 'axios';
import './App.css'
import Home from './components/Home'
import ItemsList from './components/ItemsList'
import BuildPizza from './components/BuildPizza'
import Delivering from './components/Delivering'
// Dummy data
import data from './data'
import dataLeat from './components/data'
import DataList from './components/Datalist'
const initialFormValues = {
      name: '',
      size: '',
      topping1: '',
      topping2: [
        '',
        '',
        '',
      ],
      special: '',

    };

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

function fetchLeatStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, dataLeat })
}

const initialItems= []

export default function App(props){
  const [stock, setStock] = useState([])
  const [stockLeat, setStockLeat] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues) // object
  //const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  //const [disabled, setDisabled] = useState(initialDisabled)       // boolean


  useEffect(() => {
    fetchStock().then(res => setStock(res.data))
  }, [])
  
  // console.log("App stock = ", stock)
  
  
  useEffect(() => {
    
    fetchLeatStock().then(res => {
      //console.log("App setStockLeat res.data = ", res.dataLeat)
      setStockLeat(res.dataLeat)
    })
  }, [])
  
  console.log("App setStockLeat = ", stockLeat)

  // const submit = (evt) => {
  //   evt.preventDefault();

    const newStock = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      topping1: formValues.topping1.trim(),
      topping2: ['Pepperoni', 'Diced Tomatos', 'Sausage','Black Olives', 'Canadian Bacon', 'Roasted Garlic','Spicy Italian Sausage', 'Artichoke Hearts', 'Grilled Chicker','Three Cheese', 'Onions', 'Pineapple','Green Papper', 'Extra Cheese'].filter(hobby => !!formValues[hobby]),
      special: formValues.special.trim()
    }
    setFormValues(stock.concat(newStock));
    setFormValues(initialFormValues);
  }


  // const postNewFriend = newStockLeat => {
  //   // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
  //   //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
  //   //    and regardless of success or failure, the form should reset
  //   axios.post('https://reqres.in/api/friends', newStockLeat)
  //   .then(res => {

  //     setStockLeat([res.data, ...stockLeat]);

  //     setFormValues(initialFormValues);
  //     console.log("App.js: post --- res.data = ", res.data)
  //   }).catch(err => {
  //     console.error(err);
  //     setFormValues(initialFormValues);
  //   }).finally( ()=>{
  //     setFormValues(initialFormValues);
  //   })
  // }

  // useEffect(() => {
  //   // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  //   // schema.isValid(formValues).then(valid => setDisabled(!valid))

  // }, [formValues])

  // const formSubmit = () => {
  //   const newFriend = {
  //     name: formValues.name.trim(),
  //     email: formValues.email.trim(),
  //     role: formValues.role.trim(),
  //     civil: formValues.civil.trim(),
  //     // 🔥 STEP 7- WHAT ABOUT HOBBIES?
  //     hobbies: ['hiking', 'reading', 'coding'].filter(hobby => !!formValues[hobby])
  //   }
  //   console.log("App.js newFriend = ", newFriend)
  //   postNewFriend(newFriend);
  //   // 🔥 STEP 8- POST NEW FRIEND USING HELPER
  // }


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
            <BuildPizza 
            values={formValues}
            />
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
}