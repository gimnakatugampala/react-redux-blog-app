import React, { useState } from 'react'

const SignIn = () => {

   
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

   const handleSubmit = (e) => {
       e.preventDefault()
       
       let cred = {
           email,
           password
       }

       console.log(cred)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>

            </form>
        </div>  
    )
}

export default SignIn
