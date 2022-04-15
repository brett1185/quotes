import './App.css';
import React from 'react'
import AddQuote from './components/AddQuote';
import EditQuote from './components/EditQuote';
import Login from './components/Login';
import Register from './components/Register'
import Index from './components/Index'
import SubjectTabs from './components/SubjectTabs'
import AuthorQuotes from './components/AuthorQuotes';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path ='/' default element={<Index/>}/>
        <Route path ='/tabs' element ={<SubjectTabs/>}/>
        <Route path ='/login' element = {<Login/>}/>
        <Route path ='/register' element = {<Register/>}/>
        <Route path = '/edit/quote/:id' element = {<EditQuote/>}/>
        <Route path = '/add/quote' element = {<AddQuote/>}/>
        <Route path = '/quote/:id' element = {<AuthorQuotes/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
