const ProjectList = (props) => {
    const projects = props.projects
    const title = props.title

    return ( 
        <div className="project-list">
            <h2>{ title }</h2>
            {projects.map((project) => (
                <div className="project-preview" key={project.id}>
                    <h2>{ project.title }</h2>
                    <p>Created by { project.creators }</p>
                </div>
            ))}
        </div>
        );
}
 
export default ProjectList;