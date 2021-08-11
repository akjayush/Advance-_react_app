import React, {useState} from 'react'

function UseStateCounter() {
    const [value, setValue] = useState(0);
    const ComplexIncrease = () => {
        setTimeout(()=> {
        setValue((prevState)=> {
            return prevState +1;
        }  )
            //setValue(value + 5000);
        }, 5000) //using 2000 for seonds to change value
    }
    return (
        <>
          <section style={{margin: '4rem 0'}}>
          <h2>A Regular Counter</h2>
          <h1>{value}</h1>
          <button className='btn' onClick={() => setValue(value - 1)} >Decrease</button>    
          <button className='btn' onClick={() => setValue(value + 1) } >Increase</button> 
          <button className='btn' onClick={() => setValue(0)} >Reset</button> 
              </section>  
          <selection style={{margin: '4rem 0'}}>
              <h2>A more complex Counter</h2>
              <h1>{value}</h1>
              <button className='btn' onClick={ComplexIncrease}> Increase later</button>

          </selection>
        </>
    )
}

export default UseStateCounter
