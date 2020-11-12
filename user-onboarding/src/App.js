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

const initialDisabled=true


function App() {
 
  const [formValues,setFormValues]=useState(initialFormValues)
  const [formErrors, setFormErrors]=useState(initialFormErrors)
  const [disabled,setDisabled]=useState(initialDisabled)


  const resetValues= ()=>{
    setFormValues(initialFormValues)
    console.log('values reset')
  }

 

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
      console.log(err)
      setFormErrors({...formErrors,
      [name]:err.errors[0] //map to get multiple errors??
      
      })
    })

    setFormValues({
      ...formValues,
      [name]:value
    })
  }


  useEffect(()=>{
    schema.isValid(formValues)
      .then(valid=>{
        setDisabled(!valid);
      })
  }, [formValues])

  return (
    <div className="App">
     <Form 
     values={formValues}
     change={change}
     errors={formErrors}
     resetValues={resetValues}
     disabled={disabled}
    
      />
    </div>
  );
}

export default App;
