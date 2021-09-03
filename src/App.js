import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import ProjectDetails from './components/projects/ProjectDetails'


const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Navbar /> 
            <Switch>
                <Route exact path='/' component={Dashboard} /> 
                <Route path='/project/:id' component={ProjectDetails} /> 
            </Switch>
        </div>
        </BrowserRouter>
    )
}

export default App
