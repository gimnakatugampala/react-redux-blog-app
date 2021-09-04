import React, { useState } from 'react'
import {connect} from 'react-redux'
import { createProject } from '../../store/actions/projectActions'


const CreateProject = (props) => {

   
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')


   const handleSubmit = (e) => {
       e.preventDefault()
       
       let cred = {
            title,
            content
       }

    //    console.log(props)

       props.createProject(cred)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create Post</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={(e) => settitle(e.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" onChange={(e) => setcontent(e.target.value)} className="materialize-textarea"></textarea>
                </div>
                
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>  
    )
}

const mapDispatchToProps = (dispatch) => ({ createProject:(project) => dispatch(createProject(project)) })

export default connect(null,mapDispatchToProps)(CreateProject)
