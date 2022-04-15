import React from 'react'

const TabDisplay = (props) =>{
    const {tabText}= props

    return(
        <div style={{background:'linear-gradient(45deg, red, blue',color:'yellow',
        fontFamily:'luminari, fantasy', border:'5px solid black'}}>
            {tabText}
        </div>
    )
}

export default TabDisplay