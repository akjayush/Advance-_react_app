import React , {useState} from 'react'
//useState is a named import so we must have the curly braces
function UseStateBasic() {
    const [day,setDAY] = useState("Today is rainy day") 
    const handleClick = () => {
        setDAY("Today is a bright and beautiful day!!")
    }
    return (
        <div>
            <>
            <h1>{day}</h1>
            <button type="button" className="btn" onClick={handleClick}>
            change my day
            </button>
            </>
        </div>
    )
}

export default UseStateBasic
