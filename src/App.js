import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import CreateProject from './components/projects/CreateProject'
import ProjectDetails from './components/projects/ProjectDetails'



const App = () => {
    return (
        <BrowserRouter>
        <div style={{backgroundColor:'#ccc',height:'200vh'}}>
            <Navbar /> 
            <Switch>
                <Route exact path='/' component={Dashboard} /> 
                <Route path='/project/:id' component={ProjectDetails} /> 
                <Route path='/signin' component={SignIn} /> 
                <Route path='/signup' component={SignUp} /> 
                <Route path='/create' component={CreateProject} /> 

            </Switch>
        </div>
        </BrowserRouter>
    )
}

export default App
