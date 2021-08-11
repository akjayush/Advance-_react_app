import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [value,setValue] = useState(0);
    //it cab be used only inseide not the outside
    useEffect(()=> {
        console.log('call useEffect');
        if(value>=1) {

            document.title = `New Message(${value})`;
        }
       

    },[value]);
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
