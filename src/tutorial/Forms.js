import React, {useState} from 'react'

function Forms() {
    return (
        <>
        <article>
            <form className='form' onSubmit = {handleSubmit}>
                <div className='form-control'>
                    <lable htmlFor="firstName">Name :</lable>
                    <input type="text" id="firstName" name='firstname'></input>

                </div>
                <div className='form-control'>
                    <lable htmlFor='email'> Email :</lable>
                    <input type='text' id='email' name="email"></input>

                </div>
                <button type="submit">Submit</button>
            </form>
        </article>
       
       </>
    )
}

export default Forms
