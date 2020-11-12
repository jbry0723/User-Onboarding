import logo from './logo.svg';
import './App.css';
import Form from './Form'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import schema from "./validation/formSchema"
import * as yup from 'yup'
 

const initialFormValues={
  name:'',
  email:'',
  password:'',
  terms: false,

}

const initialFormErrors={
  name:'',
  email:'',
  password:'',

}


function App() {
 
  const [formValues,setFormValues]=useState(initialFormValues)
  const [formErrors, setFormErrors]=useState(initialFormErrors)

 

  const change= (name, value) => {
    yup.reach(schema,name)
    .validate(value)
    .then(()=>{
      setFormErrors({
        ...formErrors,
        [name]:''
      })
    })
    .catch ((err)=>{
      setFormErrors({...formErrors,
      [name]:err.errors[0]
      })
    })

    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  return (
    <div className="App">
     <Form 
     values={formValues}
     change={change}
     errors={formErrors}
     initialValues={initialFormValues}
    
      />
    </div>
  );
}

export default App;
