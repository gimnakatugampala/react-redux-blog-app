import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'




const Dashboard = ({projects,auth}) => {

    const [notifications, setnotifications] = useState([])

        setInterval(() =>{

            fetch('https://social-blog2021.herokuapp.com/notifications')
            .then(res => res.json())
            .then(data => setnotifications(data))
         

        },3000)

            
     
        // setInterval(() =>{
        //     fetch('https://social-blog2021.herokuapp.com/notifications')
        //     .then(res => res.json())
        //     .then(data => setnotifications(data))
    
    
        // }, 5000)
    

    
    
    if(!auth.uid) return <Redirect to="/signin" />

    return (
        <div className="dashbaord container">
            <div className="row">
                <div className="col 12 m6">
                    <ProjectList projects={projects} />
                </div>
                <div className="col 12 m5 offset-m1">
                    <Notifications notifications={notifications} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ( { projects: state.firestore.ordered.projects,auth:state.firebase.auth })

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(Dashboard)
