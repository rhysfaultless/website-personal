//  docs_components/experienceCard.js
//  props
//    experienceYear
//    experienceTitle
//    experienceHyperlink
//    experienceCompany
//    experienceDescription

export default function ExperienceCard(props) {
    return (
        <div className="card-demo">
            <div className="card">
              <div className="card_header">
                <h1 className="experience-card-heading">{props.experienceYear}</h1>
                <h2 className="experience-card-heading">{props.experienceTitle}</h2>
                <h3><a href={props.experienceHyperlink} target="_blank" className="experience-card-heading">{props.experienceCompany}</a></h3>
              </div>
              <div className="card__body">
                <p>{props.experienceDescription}</p>
              </div>
            </div>
            <br />
        </div>
    )
}