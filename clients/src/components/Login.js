import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const Login = (props) =>{
    const [email, setEmail] = useState ('')
    const [setLoggedIn]=useState(false)
    const [password, setPassword] = useState('')
    const [errors, setErrors]= useState({})
    const navigate=useNavigate()

    const login = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/login',
        {
            email: email,
            password: password
        },
        {
            withCredentials:true
        })
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setLoggedIn(true)
            navigate('/')
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err.response.data.message)
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <Link to= {'/'}>cancel</Link>
            {errors? <p>{errors.message}</p>
            :null}
            <form onSubmit = {login}>
                <label>Email</label>
                <input
                    type='text'
                    value={email}
                    name ='email'
                    onChange ={(e)=>setEmail(e.target.value)}/>
                    <br/>
                    {errors.email?
                    <p>{errors.email.message}</p>
                :null}

                <label>Password</label>
                <input  
                    type='password'
                    name ='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <button>Login</button>
                    <br/>
                    {errors.password?
                    <p>{errors.password.message}</p>
                :null}
            </form>
        </div>
    )
}

export default Login