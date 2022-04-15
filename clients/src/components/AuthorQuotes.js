import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const AuthorQuotes=(props)=>{

    const {id} =useParams()
    const [quoteList, setQuoteList]= useState([])
    const [quoteInfo, setQuoteInfo] = useState ({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/quotes/${id}`)
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setQuoteInfo(res.data)
        })
        .catch((err)=>console.log(err))
    },[id])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/quotes')
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setQuoteList(res.data)
            })
            .catch((err)=>console.log(err))
    },[])

    return(
        <div>
            <header style={{borderBottom:'3px solid black'}}>
            <h1>Quotes by {quoteInfo.author}!</h1>
            
            <Link to = {'/'} style={{marginBottom:'50px'}}>Home</Link>
            </header>
            {quoteList.filter(quote=>quote.author===quoteInfo.author).map((quotes, index)=>(
                <div key = {index}>
                    <p style={{fontFamily:'fantasy', fontSize:'25px'}}>"{quotes.quoteText}"</p>
                    <br/>
                </div>
            ))
            }
        </div>
    )
}

export default AuthorQuotes