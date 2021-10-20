
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
import schema from './components/validation/formSchema';
import * as yup from 'yup';
const initialFormValuestest = {
      name: '',
      size: '',
      topping1: '',
      
      ///// CHECKBOXES /////
      // ['hiking']: false,
      // ['reading']: false,
      // ['Pepperoni']: false,
      // ['Diced Tomatos']: false,
      // ['Pepperoni']: false, ['Diced Tomatos']: false, ['Sausage']: false,['Black Olives']: false, 
      // ['Canadian Bacon']: false, ['Roasted Garlic']: false,['Spicy Italian Sausage']:false, ['Artichoke Hearts']:false, ['Grilled Chicker']:false,['Three Cheese']:false, ['Onions']:false, ['Pineapple']:false,['Green Papper']:false, ['Extra Cheese'] :false,
      special: '',
    };
    const initialFormValues = {
      ///// TEXT INPUTS /////
      name: '',
      size: '',
      ///// DROPDOWN /////
      topping1: '',
      ///// RADIO BUTTONS /////
      special: '',
      ///// CHECKBOXES /////
      // ['pepperoni']: false,
      // ['dicedtomatos']: false,
      ['Sausage']:false,
      ['Black Olives']:false,
      // coding: false,
    }

function fetchStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, data })
}

function fetchLeatStock() {
  // fetchStock simulates getting data through axios.get(<URL>)
  return Promise.resolve({ success: true, dataLeat })
}

const initialItems= []
const stocksList = [
  { name: 'Fido', size: 'small',topping1: 'Original Red',topping2:[ 'Diced Tomatos'], special: 'more'},
  { name: 'Tweetie', size: 'small',topping1: 'Garlic Ranch', topping2:['Pepperoni'],special: 'get salt',},
  { name: 'Goldie', size: 'small',topping1: 'BBQ Souce',topping2:['Pepperoni', 'Diced Tomatos'],special: 'get big', },
]
const initialFormErrors = {
  username: '',
  size: '',
  topping1: '',
  // topping2: ['','','','','','','','','','','','','',''],
  special: '',
}
const initialDisabled = true

export default function App(props){
  const [stock, setStock] = useState([])
  const [stockLeat, setStockLeat] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean
  const [stockeat, setStockeat] = useState(stocksList)

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
  
  // console.log("App setStockLeat = ", stockLeat)
  // console.log("App formValues = ", formValues)
  console.log("App disabled = ", disabled)

  const validate = (name, value) => {
    console.log("App validate disabled = ", disabled)
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    // const {name, value} = evt.target
   // console.log("evt.target = ",evt.target) 
    //console.log("evt.target.value = ", evt.target.value)
    console.log("App inputChange disabled = ", disabled)
    validate(name, value);
    setFormValues({...formValues, [name]:value})

  }
  console.log("App formValues after = ", formValues)


  // const submit = (evt) => {
  //   evt.preventDefault();

  //   const newStock = {
  //     name: formValues.name.trim(),
  //     size: formValues.size.trim(),
  //     topping1: formValues.topping1.trim(),
  //     topping2: ['Pepperoni', 'Diced Tomatos', 'Sausage','Black Olives', 'Canadian Bacon', 'Roasted Garlic','Spicy Italian Sausage', 'Artichoke Hearts', 'Grilled Chicker','Three Cheese', 'Onions', 'Pineapple','Green Papper', 'Extra Cheese'].filter(hobby => !!formValues[hobby]),
  //     special: formValues.special.trim()
  //   }
  //   setFormValues(stock.concat(newStock));
  //   setFormValues(initialFormValues);
  // }





  useEffect(() => {
    // STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  //console.log("App.js filter===", ['Pepperoni', 'Diced Tomatos'].filter(topping2 => !!'Pepperoni'))

  const formSubmit = (evt) => {
    evt.preventDefault();
    const newStock = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      topping1: formValues.topping1.trim(),
      topping2: ['Sausage', 'Black Olives'].filter(topping => !!formValues[topping]),
      // topping2: ['Pepperoni', 'Diced Tomatos', 'Sausage','Black Olives', 'Canadian Bacon', 'Roasted Garlic','Spicy Italian Sausage', 'Artichoke Hearts', 'Grilled Chicker','Three Cheese', 'Onions', 'Pineapple','Green Papper', 'Extra Cheese'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim()
    }
    
  axios.post('https://reqres.in/api/stock', newStock)
  .then(res => {
    setStockeat([newStock, ...stockeat]);
    setFormValues(initialFormValues);
    
  }).catch(err => {
    console.error(err);
  })


    //setStockeat(stockeat.concat(newStock));
    // setStockeat([newStock, ...stockeat]);
    // setFormValues(initialFormValues);
  }


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
            change={inputChange}
            submit={formSubmit}
            stockeat= {stockeat}
            disabled={disabled}
            errors={formErrors}
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
};