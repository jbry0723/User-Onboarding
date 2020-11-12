import axios from "axios";
import React, {useState, useEffect} from 'react'



export default function Form(props){
    const initialUsers=[]
    const [users, setUsers]=useState(initialUsers)
    
    const{values, change,errors,initialValues}=props


const onChange=evt =>{
    const {name,value,type,checked, }=evt.target;
    const correctValue=type==='checkbox' ? checked : value;
    change(name, correctValue)
}

const onSubmit=evt=>{
    evt.preventDefault()
    const newUser={
        name:values.name.trim(),
        email:values.email.trim(),
        password:values.password.trim()
}
 postNewUser(newUser)   
}

const postNewUser= newUser=>{
    axios.post('https://reqres.in/api/users', newUser)
        .then((res)=>{
            setUsers([res.data,...users])
            console.log(res)
            })
        .catch((err)=>{
            console.log(err)
        })

}



    return(
        <div>
            <form onSubmit={onSubmit}>
            <label>Name
                <input
                name="name"
                type='text'
                value={values.name}
                onChange={onChange}
                placeholder='Enter Name'
                />
            </label>
            <label>Email
                <input
                name="email"
                type='text'
                value={values.email}
                onChange={onChange}
                placeholder='Enter Email'
                />
            </label>
            <label>Password
                <input
                name="password"
                type='text'
                value={values.password}
                onChange={onChange}
                placeholder='Enter Password'
                />
            </label>
            <label>Agree to Terms of Service?
                <input
                name="terms"
                type='checkbox'
                value={values.terms}
                onChange={onChange}
                />
            </label>
            <button>Submit</button>
            </form>



            <div className='errors'>
               <div>{errors.name}</div>
               <div>{errors.email}</div>
               <div>{errors.password}</div>
               <div>{errors.terms}</div>
            </div>

            <div className='users'>
                Current users:
                <pre>{JSON.stringify(users)}</pre>
            </div>
        </div>
    )
}

