import ExpertiseLogo from "../Partials/ExpertiseLogo/ExpertiseLogo";
import expertiseInfo from "../../expertiseInfo";

const Expertise = () => {
    return (
        <section id="expertise">
            <div className="container text-center">
                <h1 className="text-center mb-5">Expertise</h1>
                <div className="row my-5">
                    {/* have to add map here */}
                    {expertiseInfo.map(expertise => {
                        return <ExpertiseLogo imageUrl={expertise.imgUrl} imageTitle={expertise.imageTitle} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Expertise;