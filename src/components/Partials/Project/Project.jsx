const Project = (props) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <a
                className="url-text"
                href={props.projectUrl}
            >
                <img
                    className="project-img card-img-top"
                    src={props.gifUrl}
                    alt="opps!"
                />
                <p>{props.projectName}</p>
            </a>
        </div>
    )
}

export default Project;