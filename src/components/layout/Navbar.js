import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {

    const {auth,profile} = props

    // const {auth} = props
    const links = auth.uid ? <SignedInLinks  profile={profile} /> : <SignedOutLinks />
    console.log(auth)

    return (
       <nav className="nav-wrapper grey darken-3">
           <div className="container">
               <Link to='/' style={{textAlign:'left',fontSize:'25px'}}>SocialBook</Link>
                {links}
           </div>
       </nav>
    )
}

const mapStateToProps = (state) =>{
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
