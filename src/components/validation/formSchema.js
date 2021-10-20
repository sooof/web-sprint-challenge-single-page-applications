// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username  must be 3 characters long!'),
    size: yup
        .string()
        .trim()
        .required('size is required!'),
    topping1: yup
        .string()
        .oneOf(['Original Red', 'Garlic Ranch', 'BBQ Souce', 'Spinach Alfredo'], 'topping1 is required!'),
    // topping2: yup
    //     .string(),
        // .oneOf(['Pepperoni', 'Diced Tomatos'], 'topping2 status is required!'),
    // ['pepperoni']:yup.boolean(),
    // ['dicedtomatos']:yup.boolean(),
    ['Sausage']:   yup.boolean(),
    ['Black Olives']:  yup.boolean(),
    // topping2: yup
    //     .string()
    //     .oneOf(['Pepperoni', 'Diced Tomatos', 'Sausage','Black Olives', 'Canadian Bacon', 'Roasted Garlic','Spicy Italian Sausage', 'Artichoke Hearts', 'Grilled Chicker','Three Cheese', 'Onions', 'Pineapple','Green Papper', 'Extra Cheese'], 'Role is required!'),
    //     ['Pepperoni']:yup.boolean(),
    //     ['Diced Tomatos']:yup.boolean(),
    // email: yup
    //     .string()
    //     .email('Must be a valid email address!')
    //     .required('Email is required!'),
    // role: yup
    //     .string()
    //     .oneOf(['instructor', 'student', 'alumni', 'tl'], 'Role is required!'),
    // civil: yup
    //     .string()
    //     .oneOf(['married', 'single'], 'Civil status is required!'),
    // coding: yup.boolean(),
    // reading: yup.boolean(),
    // hiking: yup.boolean()
    special:  yup
    .string()
    .trim(),
})

export default formSchema;