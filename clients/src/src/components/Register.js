import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = (props)=>{

    const [confirm, setConfirm]=useState('')
    const [errors, setErrors] = useState({})

    const [user, setUser] = useState ({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const registerHandle = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const register = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/register', user,
        {
            withCredentials:true
        })
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setUser({
                name:'',
                email:'',
                password:'',
                confirmPassword:''
            })
            setConfirm(
                'Thank you for registering, you can now add your own quotes!'
            )
            setErrors({})
        })
        .catch((err) =>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return(
        <div>
            <header style ={{borderBottom:'3px solid black'}}>
            <h1>New User Registration</h1>
            <Link to = {'/'}>cancel</Link>
            </header>
            {confirm? <h3>{confirm}</h3>: null}

            <form onSubmit={register} style={{display:'flex', justifyContent:'space-evenly', flexDirection:'column', margin:'150px'}}>
                <label>Name</label>
                    <input
                    type ='text'
                    value ={user.name}
                    name='name'
                    onChange={(e)=> registerHandle(e)}/>
                    {errors.name? (
                    <p style={{color:'red'}}>{errors.name.message}</p>
                    )
                    :null}
                    <br/>

                <label>email</label>
                    <input
                    type ='text'
                    value ={user.email}
                    name='email'
                    onChange={(e)=> registerHandle(e)}/>
                    {errors.email? (
                    <p style={{color:'red'}}>{errors.email.message}</p>
                    )
                    :null}
                    <br/>

            <label>password</label>

                    <input
                    type ='text'
                    value ={user.password}
                    name='password'
                    onChange={(e)=> registerHandle(e)}/>
                    {errors.password? 
                    <p style={{color:'red'}}>{errors.password.message}</p>
                    :null}
                    <br/>

                <label>Confirm Password</label>
                    <input
                    type ='text'
                    value ={user.confirmPassword}
                    name='confirmPassword'
                    onChange={(e)=> registerHandle(e)}/>
                    {errors.confirmPassword? (
                    <p style={{color:'red'}}>{errors.confirmPassword.message}</p>
                    )
                    :null}
                    <br/>

                <button>Register Now!</button>
            </form>

            </div>
    )
}

export default Register