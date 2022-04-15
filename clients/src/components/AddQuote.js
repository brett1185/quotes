import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddQuote = (props) =>{

    const [user, setUser]=useState({})
    const [author, setAuthor]=useState ('')
    const [quoteText, setQuoteText]=useState('')
    const [subject, setSubject]=useState('')
    const [errors, setErrors]=useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:8000/api/users',
        {withCredentials:true})
        .then((res)=>{
            console.log(res.data)
            setUser(res.data)
        },)
        .catch((err)=> console.log(err))
        
    },[])

    const submitHandler =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/quotes',
        
        {
            quoteText,
            author,
            subject
        })
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            navigate ('/')
        })
        .catch((err)=>{
            console.log(err)
            console.log(err.response.data)
            setErrors(err.response.data.errors)
            console.log('please read message')
        })
    }

    return(
        <div>
            <header>
                <h1>Welcome {user.name}, add a Quote!</h1>
                <Link to={'/'}>Home</Link>
            </header>

            <form onSubmit={submitHandler}
                    style={{margin:'200px', display:'flex', justifyContent:'space-evenly', flexDirection:'column'}}
                    >
                <label>Who said it:</label>
                <input 
                type ='text'
                name = 'author'
                value = {author}
                onChange = {(e)=>setAuthor(e.target.value)}/>
                {errors.author?
                <p style={{color:'red'}}>{errors.author.message}</p>
            :null}
                <br/>

                <label>Quote:</label>
                <input
                type ='text'
                name = 'quote'
                value = {quoteText}
                onChange = {(e)=>setQuoteText(e.target.value)}/>
                {errors.quoteText?
                <p style={{color:'red'}}>{errors.quoteText.message}</p>
            :null}
                <br/>

                <label>What category is the quote?</label>
                <select 
                value = {subject} 
                name = 'subject'
                onChange = {(e)=>setSubject(e.target.value)}>
                    <option value=''hidden> Please select an option</option>
                    <option value='history'>History</option>
                    <option value='philosophy'>philosophy</option>
                    <option value='humor'>humor</option>
                    <option value='family'>family</option>
                    <option value='miscellaneous'>miscellaneous</option>
                </select>
                {errors.subject?
                <p style={{color:'red'}}>{errors.subject.message}</p>:
                null}
                <br/>

                <button>Add Quote!</button>

            </form>
        </div>
    )
}

export default AddQuote