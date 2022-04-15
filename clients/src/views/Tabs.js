import React from 'react'

const Tabs =(props) =>{

const {tabList, setActiveTab, tabStyle}= props




return(
    <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        {tabList.map((tab, index)=>(
            <p onClick={()=>setActiveTab(index)}
            style={tabStyle}
            key ={index}
            >{tab.label}</p>

        ))}
    </div>
)}

export default Tabs