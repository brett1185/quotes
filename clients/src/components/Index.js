import React, {useState, useEffect} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import axios from 'axios'

const Index=(props)=>{

    const [quoteList, setQuoteList]= useState([])
    const [user, setUser] = useState ({})
    const [loggedIn, setLoggedIn]=useState(false)
    const navigate = useNavigate()
    const {id} = useParams()


    useEffect(()=>{
        axios.get('http://localhost:8000/api/quotes')
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setQuoteList(res.data)
            })
            .catch((err)=>console.log(err))
    },[])


    useEffect(()=>{
        axios.get('http://localhost:8000/api/users',
    {withCredentials:true})
    .then((res)=>{
        console.log(res.data)
        setUser(res.data)
        setLoggedIn(true)
    })
    .catch((err)=>console.log(err))},[])

    const deleteQuote = (id) =>{
        axios.delete(`http://localhost:8000/api/quotes/${id}`)
        .then((res) =>{
            console.log(res.data)
            setQuoteList(quoteList.filter((quote)=>quote._id!==id))
        },[])
        .catch ((err) =>console.log(err))
    }

    const logout =(e) =>{
        axios.post('http://localhost:8000/api/users/logout',{},
        {withCredentials:true})
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            setLoggedIn(false)
            console.log(loggedIn)
            navigate('/')
        })
        .catch((err)=>console.log(err))
    }

    return(
        <div>
            <header style={{display:'flex',
                justifyContent:'space-between'}}>
                <h1 style={{fontSize:'50px'}}>Quotes!</h1>
                {
                loggedIn===(false)?<div style={{margin:'30px'}}>
                <h3>Want to add quotes?</h3>
                <Link to={'/login'}>Sign in!</Link>
                <br/>
                <Link to={'/register'}>Register!</Link>
                </div>:
                <div style={{margin:'30px'}}>
                    <h4>Welcome {user.name}!</h4>
                <button onClick={logout}>Logout</button>
                <Link to = {'/add/quote'}>Add a quote!</Link>
                </div>
                }
            </header>
            <h2>Recent Quotes!</h2>
            <Link to ={'/tabs'}>View by subject!</Link>
            {
                quoteList.map((quote, index)=>(
                    <div style ={{border:'5px solid black', marginTop:'10px',
                    backgroundColor:'gray',
                    color:'white'}}
                    key={index}>
                        <p style ={{fontFamily:'luminari, fantasy',
                    }}>"{quote.quoteText}"</p>
                        <Link to = {`/quote/${quote._id}`}
                        style={{fontWeight:'bold'}}>{quote.author}</Link>
                        {loggedIn===(true)?<div style={{marginTop:'15px'}}>
                        <button onClick = {()=>deleteQuote(quote._id)}>delete</button>
                        <button onClick = {()=>navigate(`/edit/quote/${quote._id}`)} >Edit</button>
                        </div>:
                        <p>Only users can edit or delete quotes</p>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Index