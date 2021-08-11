import React, {useState} from 'react'

function UseStateObjects() {
    const [person, setPerson] = useState({
        name:"Star Lord",
        age: 50,
        message: "I am a god"
    });
    const [name,setName] = useState("Tony stark")

    const [age,setAge] = useState(45)
    
    const [message,setMessage] = useState('I am IronMan')

    const changeMessage = () => {
        setPerson({...person, message:"Not Anymore"});
        setMessage("Hello World");
    }
    return (
        <div>
            <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className="btn" onClick={changeMessage} >Change My Message</button>
            </>
            
        </div>
    )
}

export default UseStateObjects
