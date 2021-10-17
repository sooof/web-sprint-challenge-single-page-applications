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
    const {values, change, submit, stockeat} = props
console.log("BuildPizza = ", values)
console.log("BuildPizza stockeat= ", stockeat)

stockeat.map( (e)=>{
    console.log(e.name)
})

  const history = useHistory();

  const routeToDeliver = () => {
    history.push("./delivering")
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
            <div> 
                name is {va.name}
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
                        onChange={change}
                    />
            </label>
        </div>

        {/* Select */}
        {/* <div>
            <div className='label-group'>
                    <h2>Choice Of Size</h2>
                    <p>Required</p>
            </div>
            <label >
                <select
                    name='size'
                    value=""
                >
                    <option value=''>- Select an option -</option>
                    <option value='small'>Small Pizza</option>
                    <option value='medium'>Medium Pizza</option>
                    <option value='large'>Large Pizza</option>
                    <option value='extraLarge'>Extra-large Pizza</option>
                </select>
            </label>
        </div>
            */}
        {/* Redio */}
        {/* <div>
            <div className='label-group'>
                    <h2>Choice Of Souce</h2>
                    <p>Required</p>
            </div>
            <label className='radio'>
            <input 
                type="radio"
                name="topping1"
                value="Original Red"
            />
            Original Red
            </label>
            <label className='radio'>
            <input
                type="radio"
                name="topping1"
                value="Garlic Ranch"
            />
            Garlic Ranch
            </label>
            <label className='radio'>
            <input 
                type="radio"
                name="topping1"
                value="BBQ Souce"
            />
            BBQ Souce
            </label>
            <label className='radio'>
            <input
                type="radio"
                name="topping1"
                value="Spinach Alfredo"
            />
            Spinach Alfredo
            </label>
        </div> */}
        {/* Checkbox */}
        {/* <div>
            <div className='label-group'>
                    <h2>Add Toppings</h2>
                    <p>Choose up to 10</p>
            </div>

            <div className='checkboxs'>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Pepperoni
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Diced Tomatos
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value="Sausage"
                    />
                    Sausage
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Black Olives
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Canadian Bacon
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Roasted Garlic
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Spicy Italian Sausage
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Artichoke Hearts
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Grilled Chicker
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Three Cheese
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Onions
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Pineapple
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Green Papper
                    </label> 
                </div>
                <div className='box'> 
                    <label className='checkbox'>
                    <input
                        type="checkbox"
                        name="topping2"
                        value=""
                    />
                    Extra Cheese
                    </label> 
                </div>
            </div>
        </div> */}
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
        {/* <div>
            <div className='label-group'>
                    <h2>Special Instructions</h2>
            </div>
            <label className='speciaSpecial'>
                    <input
                        type="text"
                        name="special"
                        placeholder="Anthing else you'd like to add?"
                        // value=""
                    />
                    
            </label> 
        </div> */}
        <div>
            <hr/>
            <label className='order'>
                    <input
                        type="number"
                    />
                    {/* <button  onClick={routeToDeliver}>Add to Order</button> */}
                    <button >Add to Order</button>
            </label> 
        </div>
                            
        </form>
    </div>
  )
}
