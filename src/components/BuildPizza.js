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

  const history = useHistory();

  const routeToDeliver = () => {
    history.push("./pizza")
  }

  return (
    <div className='container' >
      {/* <p className='item-details'>{text}</p> */}
      {
        <section id="homeBg" className="bg-img">
        </section>
      }

        <form className='form container' >
            <h1>Build Your Own Pizza</h1>

        {/* Select */}
        <div>
            <div className='label-group'>
                    <h2>Choice Of Size</h2>
                    <p>Required</p>
            </div>
            <label >
                <select
                    name='role'
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
            <label className='radio'>
            <input 
                type="radio"
                name="civil"
                value="Original Red"
            />
            Original Red
            </label>
            <label className='radio'>
            <input
                type="radio"
                name="civil"
                value="Garlic Ranch"
            />
            Garlic Ranch
            </label>
            <label className='radio'>
            <input 
                type="radio"
                name="civil"
                value="BBQ Souce"
            />
            BBQ Souce
            </label>
            <label className='radio'>
            <input
                type="radio"
                name="civil"
                value="Spinach Alfredo"
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
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Pepperoni"
                        value=""
                    />
                    Pepperoni
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Diced Tomatos"
                        value=""
                    />
                    Diced Tomatos
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="toppings"
                        value="Sausage"
                    />
                    Sausage
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Black Olives"
                        value=""
                    />
                    Black Olives
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Canadian Bacon"
                        value=""
                    />
                    Canadian Bacon
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Roasted Garlic"
                        value=""
                    />
                    Roasted Garlic
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Spicy Italian Sausage"
                        value=""
                    />
                    Spicy Italian Sausage
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Artichoke Hearts"
                        value=""
                    />
                    Artichoke Hearts
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Grilled Chicker"
                        value=""
                    />
                    Grilled Chicker
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Three Cheese"
                        value=""
                    />
                    Three Cheese
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Onions"
                        value=""
                    />
                    Onions
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Pineapple"
                        value=""
                    />
                    Pineapple
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Green Papper"
                        value=""
                    />
                    Green Papper
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="Extra Cheese"
                        value=""
                    />
                    Extra Cheese
                    </label> 
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
 
         {/* Select */}
         <div>
            <div className='label-group'>
                    <h2>Special Instructions</h2>
                    {/* <p>Choose up to 1</p> */}
            </div>
            <label className='speciaSpecial'>
                    <input
                        type="text"
                        name="Extra Cheese"
                        placeholder="Anthing else you'd like to add?"
                        // value=""
                    />
                    
            </label> 
        </div>

        </div>

        <div>
            <hr/>
            <label className='order'>
                    <input
                        type="number"
                        name="order"
                        // value=""
                    />
                    <button  onClick={routeToDeliver}>Add to Order</button>
            </label> 
        </div>
                            
        </form>
    </div>
  )
}
