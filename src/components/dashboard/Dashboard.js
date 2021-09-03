import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'


const Dashboard = () => {
    return (
        <div className="dashbaord container">
            <div className="row">
                <div className="col 12 m6">
                    <ProjectList />
                </div>
                <div className="col 12 m5 offset-m1">
                    <Notifications/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
