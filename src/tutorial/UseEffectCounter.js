import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [value,setValue] = useState(0);
    useEffect(()=> {
        console.log('call useEffect')
        document.title = `New Iphone(${value})`;

    });
    console.log('render component')
    
    return (
        <>
         <h1>{value}</h1>
         <button className='btn' onClick={() => setValue(value+1)}  >
             Click Me
             </button> 
        </>
    )
}

export default UseEffectCounter
