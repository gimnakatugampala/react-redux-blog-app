import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'


const SignIn = (props) => {

   
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

   const handleSubmit = (e) => {
       e.preventDefault()
       
       let cred = {
           email,
           password
       }

       props.signIn(cred)
    }

    const {authError,auth} = props


    if(auth.uid) return <Redirect to="/" />


    return (

        <div className="container" >
            <form onSubmit={handleSubmit} className="white" style={{padding:'20px',margin:'20px'}}>
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
                    <button className="btn primary lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                    {authError ? <p> {authError}</p> : null}
                    </div>
                </div>

            </form>
        </div>  
    )
}

const mapStateToProps = (state)=>{
    return{
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn:(cred) => dispatch(signIn(cred))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
