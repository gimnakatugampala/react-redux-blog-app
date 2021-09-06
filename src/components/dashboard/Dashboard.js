import React from 'react'
import { connect } from 'react-redux'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'




const Dashboard = ({projects,auth}) => {

    if(!auth.uid) return <Redirect to="/signin" />

    return (
        <div className="dashbaord container">
            <div className="row">
                <div className="col 12 m6">
                    <ProjectList projects={projects} />
                </div>
                <div className="col 12 m5 offset-m1">
                    <Notifications/>
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
