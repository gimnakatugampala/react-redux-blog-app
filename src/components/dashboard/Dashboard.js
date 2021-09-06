import React from 'react'
import { connect } from 'react-redux'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'



const Dashboard = ({projects}) => {

    console.log(projects)

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

const mapStateToProps = (state) => (
    console.log(state),
    { projects: state.firestore.ordered.projects })

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(Dashboard)
