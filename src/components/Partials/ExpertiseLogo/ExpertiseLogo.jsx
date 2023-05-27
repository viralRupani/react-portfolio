const ExpertiseLogo = (props) => {
    return (
        <div className="col-6 col-md-2">
            <img
                className="skill-img"
                src={props.imageUrl}
                title={props.imageTitle}
                alt="somthing"
            />
        </div>
    )
}

export default ExpertiseLogo;