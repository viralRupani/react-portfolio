import Project from "../Partials/Project/Project";
import projectsInfo from "../../projectsInfo";

const Projects = () => {
    return (
        <section id="projects">
            <div className="container text-center">
                <h1 className="text-center mb-5">Projects</h1>
                <div className="row">
                    {/* have to add map here */}
                    {projectsInfo.map(function (project) {
                        return <Project projectUrl={project.projectUrl} projectName={project.projectName} gifUrl={project.gifUrl} />
                    })}
                </div>
                <button className="btn btn-outline-dark">
                    <a className="url-text" href="projects.html">
                        More!
                    </a>
                </button>
            </div>
        </section>
    )
}

export default Projects;