import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


const SignUp = ({auth}) => {

   
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')

   const handleSubmit = (e) => {
       e.preventDefault()
       
       let cred = {
           email,
           firstName,
           lastName,
           password
       }

       console.log(cred)
    }

    if(auth.uid) return <Redirect to="/" />


    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={(e) => setfirstName(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={(e) => setlastName(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => setemail(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setpassword(e.target.value)} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>

            </form>
        </div>  
    )
}

const mapStateToProps = (state)=>{
    return{
        auth:state.firebase.auth
    }
}

export default connect(mapStateToProps)(SignUp)
