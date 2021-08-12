import React from 'react'
import axios from 'axios'


function LearnJSON() {
    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/users",{
            
        }        
        )
    }
    return (
        <>
          <button type ="button" className='btn' onClick={handleClick}>Send User</button>
          <button type ="button" className='btn' onClick={getUsers}>Get User</button>  
        </>
    )
}

export default LearnJSON
