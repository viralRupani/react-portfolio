const Header = () => {
    return (
        <div className="container">
            <div className="row heading">
                <div className="col-12 col-md-6 center-image">
                    <img
                        className="developer-image"
                        src="https://media.giphy.com/media/zhYSVCirREeIZtONCI/giphy.gif"
                        alt="some thing"
                    />
                </div>
                <div className="col-12 col-md-6 title-text">
                    <h1>Hello,</h1>
                    <h3>
                        I am <span className="typed"> </span>
                    </h3>
                    {/* <div className="hire-resume-button">
              <button className="btn btn-outline-dark" style={{"color: rgb(224, 221, 221)}}"
                onClick="window.open('static/images/Viral_Rupani_Resume.pdf')">📄Resume</button>
              <a href="mailto:viralrupani12017@gmail.com"><button className="btn btn-dark mx-2">🧑‍💻Hire me</button></a>
            </div> */}
                </div>
            </div>
        </div>
    )
}

export default Header;