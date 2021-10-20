import React from 'react'
import { useHistory } from 'react-router-dom';

// const friends = [
//     {
//       id: uuid(),
//       name: 'Michael',
//       size: 'Small',
//       topping1: 'Original Red',
//       topping2: [
//         'Pepperoni',
//         'Diced Tomatos',
//         'Sausage',
//       ],
//       special: "Add more Papper!!!",

//     },
//   ]

export default function BuildPizza(props) {
    const {values, change, submit, stockeat,  disabled, errors} = props
// console.log("BuildPizza = ", values)
// console.log("BuildPizza stockeat= ", stockeat)
// stockeat.map( (e)=>{
//     console.log(e.name)
// })

console.log("BuildPizza disabled = ", disabled)

  const history = useHistory();

  const routeToDeliver = () => {
    history.push("./delivering")
  }
  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, type, checked} = evt.target
    console.log(evt.target) 
    console.log("BuildPizza ###====",evt.target.value)
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
    // change(name, value)
  }

  return (
    <div className='container' >
      {/* <p className='item-details'>{text}</p> */}
      {
        <section id="homeBg" className="bg-img">
        </section>
      }
      {
          stockeat.map((va) => (
            <div className='container show'> 
               <h3> name is {va.name}</h3>
               <ul> 
               <li> size is {va.size}</li>
               <li> size is {va.topping1}</li>
                <ul> 
                    {
                         va.topping2.map( (t2,index )=> (<li key={index}>{t2} </li>))
                    }
                </ul>
               <li> special is {va.special}</li>

               </ul>

            </div>
          )
          )}

        <form className='form container' onSubmit={submit}>
            <h1>Build Your Own Pizza</h1>
        {/* Name */}
        <div className='inputName'>
            <div className='label-group'>
                    <h2>Input you name </h2>
                    <p>Required</p>
            </div>
            <label >
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
            </label>
        </div>

        {/* Select */}
        <div>
            <div className='label-group'>
                    <h2>Choice Of Size</h2>
                    <p>Required</p>
            </div>
            <label >
                <select
                    name='size'
                    value={values.size}
                    onChange={onChange}
                >
                    <option value=''>- Select an option -</option>
                    <option value='small'>Small Pizza</option>
                    <option value='medium'>Medium Pizza</option>
                    <option value='large'>Large Pizza</option>
                    <option value='extraLarge'>Extra-large Pizza</option>
                </select>
            </label>
        </div>
           
        {/* Redio */}
        <div>
            <div className='label-group'>
                    <h2>Choice Of Souce</h2>
                    <p>Required</p>
            </div>
            <label className='radiol'>
            <input 
                type="radio"
                name="topping1"
                value='Original Red'
                onChange={onChange}
                checked={values.topping1 === 'Original Red'}
            />
            Original Red
            </label>
            <label className='radiol'>
            <input
                type="radio"
                name="topping1"
                value='Garlic Ranch'
                onChange={onChange}
                checked={values.topping1 === 'Garlic Ranch'}
            />
            Garlic Ranch
            </label>
            <label className='radiol'>
            <input 
                type="radio"
                name="topping1"
                value='BBQ Souce'
                onChange={onChange}
                checked={values.topping1 === 'BBQ Souce'}
            />
            BBQ Souce
            </label>
            <label className='radiol'>
            <input
                type="radio"
                name="topping1"
                value="Spinach Alfredo"
                onChange={onChange}
                checked={values.topping1 === 'Spinach Alfredo'}
            />
            Spinach Alfredo
            </label>
        </div>
        {/* Checkbox */}
        <div>
            <div className='label-group'>
                    <h2>Add Toppings</h2>
                    <p>Choose up to 10</p>
            </div>

            <div className='checkboxs'>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Pepperoni'
                        checked={values['Pepperoni']}
                        onChange={onChange}
                    />
                    Pepperoni
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Diced Tomatos'
                        checked={values['Diced Tomatos']}
                        onChange={onChange}
                    />
                    Diced Tomatos
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Sausage'
                        checked={values['Sausage']}
                        onChange={onChange}
                    />
                    Sausage
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Black Olives'
                        checked={values['Black Olives']}
                        onChange={onChange}
                    />
                    Black Olives
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Canadian Bacon'
                        checked={values['Canadian Bacon']}
                        onChange={onChange}
                    />
                    Canadian Bacon
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Roasted Garlic'
                        checked={values['Roasted Garlic']}
                        onChange={onChange}
                    />
                    Roasted Garlic
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Spicy Italian Sausage'
                        checked={values['Spicy Italian Sausage']}
                        onChange={onChange}
                    />
                    Spicy Italian Sausage
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Artichoke Hearts'
                        checked={values['Artichoke Hearts']}
                        onChange={onChange}
                    />
                    Artichoke Hearts
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Grilled Chicker'
                        checked={values['Grilled Chicker']}
                        onChange={onChange}
                    />
                    Grilled Chicker
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Three Cheese'
                        checked={values['Three Cheese']}
                        onChange={onChange}
                    />
                    Three Cheese
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Onions'
                        checked={values['Onions']}
                        onChange={onChange}
                    />
                    Onions
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Pineapple'
                        checked={values['Pineapple']}
                        onChange={onChange}
                    />
                    Pineapple
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Green Papper'
                        checked={values['Green Papper']}
                        onChange={onChange}
                    />
                    Green Papper
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkboxl'>
                    <input
                        type="checkbox"
                        name='Extra Cheese'
                        checked={values['Extra Cheese']}
                        onChange={onChange}
                    />
                    Extra Cheese
                    </label> 
                </div>
            </div>
        </div>
        {/* Select */}
        {/* <div>
            <div className='label-group'>
                    <h2>Choice Of Substitute</h2>
                    <p>Choose up to 1</p>
            </div>
            <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Extra Cheese"
                        value=""
                    />
                    Gluten Free Crust (+ $100)
            </label> 
        </div> */}

        {/* special */}
        <div>
            <div className='label-group'>
                    <h2>Special Instructions</h2>
            </div>
            <label className='speciaSpecial'>
                    <input
                        type="text"
                        name="special"
                        value={values.special}
                        onChange={onChange}
                        placeholder="Anthing else you'd like to add?"
                        // value=""
                    />
                    
            </label> 
        </div>

        {
            <div className='errors'>
            {/* ERRORS HERE */}
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.topping1}</div>
                <div>{errors.topping2}</div>
                {/* <div>{errors.role}</div> */}
                <div>{errors.special}</div>
            </div>
                
        }
        <div>
            <hr/>
            <label className='order'>
                    <input
                        type="number"
                    />
                    {/* <button  onClick={routeToDeliver}>Add to Order</button> */}
                    <button disabled={disabled}>Add to Order</button>
            </label> 
        </div>
                            
        </form>
    </div>
  )
}
