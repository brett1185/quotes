import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Tabs from '../views/Tabs';
import TabDisplay from '../views/TabDisplay';
import axios from 'axios';


const SubjectTabs = (props)=>{
    useEffect(()=>{
        axios.get('http://localhost:8000/api/quotes')
        .then ((res)=>{
            console.log(res.data)
            setQuoteList(res.data)
        })
        .catch((err)=>console.log(err))
    },[])

    const [quoteList, setQuoteList] = useState([])
    const tabList=[
        {
            label: "History", 
            content: quoteList.filter(quote=>quote.subject === 'history').map((quotes, index)=>(
                <div key={index}>
                    <p>"{quotes.quoteText}" - {quotes.author}</p>
                </div>))

    },
        
        {
            label: "Humor",
            content: quoteList.filter(quote=>quote.subject === 'humor').map((quotes, index)=>(
                <div key={index}>
                    <p>"{quotes.quoteText}" - {quotes.author}</p>
                </div>))
        },
        
        {
            label: "Philosophy",
            content: quoteList.filter(quote=>quote.subject === 'philosophy').map((quotes, index)=>(
                <div key={index}>
                    <p>"{quotes.quoteText}" - {quotes.author}</p>
                </div>))
        },
        {
            label: "Family",
            content: quoteList.filter(quote=>quote.subject === 'family').map((quotes, index)=>(
                <div key={index} >
                    <p>"{quotes.quoteText}" - {quotes.author}</p>
                </div>))
        },
        {
            label: "Miscellaneous",
            content:  quoteList.filter(quote=>quote.subject === 'miscellaneous').map((quotes, index)=>(
                <div key={index}>
                    <p>"{quotes.quoteText}" - {quotes.author}</p>
                </div>))
        }
        ]

        const [activeTab, setActiveTab] =useState(0)

        const tabStyle={
            justifyContent:'center',
            background:'linear-gradient(45deg, blue, red)',
            color:'yellow',
            border:'2px solid black',
            margin:'15px',
            width:'150px',
            }
        

return (
    <div className="App">
                    <header>
                <h1>Quotes by subject!!</h1>
                <Link to={'/'}>Home</Link>
            </header>

        <Tabs tabList={tabList} activeTab={activeTab} setActiveTab={setActiveTab} activeTab={activeTab} tabStyle={tabStyle}/>

        <TabDisplay tabText={tabList[activeTab].content}/>

    </div>
)};
export default SubjectTabs