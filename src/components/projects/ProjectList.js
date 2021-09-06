import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) => {

    console.log(projects)

    return (
        <div className="project-list section">

            {projects && projects.map((project) => (
                <Link to={'/project/'+ project.id} key={project.id}>
                <ProjectSummary key={project.id} project={project}  />
                </Link>
            ))}

        </div>
    )
}

export default ProjectList
