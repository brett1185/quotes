import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useNavigate, useParams} from 'react-router-dom'

const EditQuote = (props) =>{
    const [author, setAuthor] = useState('')
    const [quoteText, setQuoteText] = useState('')
    const [subject, setSubject] = useState ('')
    const {id} = useParams()
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/quotes/${id}`)
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setAuthor(res.data.author)
            setQuoteText(res.data.quoteText)
            setSubject(res.data.subject)
        })
        .catch((err)=>console.log(err))
    },[id])

    const submitEdit =(e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/quotes/${id}`,{
            author:author,
            quoteText:quoteText,
            subject:subject
        })
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            navigate ('/')
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err.response.data.message)
        })
    }
    return(
        <div>
            <header  style={{borderBottom:'3px solid black'}}>
                <h1>Edit Quote!</h1>
                <Link to={'/'}>Home</Link>
            </header>

            <form onSubmit={submitEdit}
        style={{margin:'200px', display:'flex', justifyContent:'space-evenly', flexDirection:'column'}}>
                <label>Who said it:</label>
                <input 
                type ='text'
                value = {author}
                onChange = {(e)=>setAuthor(e.target.value)}/>
                {errors.author?
                <p>{errors.author.message}</p>
                :null}
                <br/>


                <label>Quote:</label>
                <input
                type ='text'
                value = {quoteText}
                onChange = {(e)=>setQuoteText(e.target.value)}/>
                {errors.quoteText?
                <p>{errors.quoteText.message}</p>
                :null}
                <br/>


                <label>What category is the quote?</label>
                <select 
                value = {subject} 
                onChange = {(e)=>setSubject(e.target.value)}>
                    <option defaultValue hidden>Select an option</option>
                    <option value='history'>History</option>
                    <option value='philosophy'>philosophy</option>
                    <option value='humor'>humor</option>
                    <option value='family'>family</option>
                    <option value='miscellaneous'>miscellaneous</option>
                </select>
                {errors.quoteText?
                <p>{errors.quoteText.message}</p>
                :null}
                <br/>


                <button>Edit Quote!</button>

            </form>
        </div>
    )
}

export default EditQuote