import React, { Component }  from 'react';
import {
    NavLink
  } from "react-router-dom";
export default class docsum extends Component {
    render(){
        return(
            <div>
                <div className="page-style">
                <main>
  <span className="span-fancy"><h1 className="fancy">Summarization Explanability.</h1></span>
</main>
                <p>Designing and researching an explainability feature for document summarization algorithm at Thomson Reuters, spring 2020 </p>
                </div>
                <div className="page-content">
                <h2> The Problem</h2>
                <p>
                A deep learning text summarization model was built and integrated into one of Thomson Reuters editorial workbenches. Since this model has been in active use the primary task of the editors has become to review and edit the machine-generated the summaries rather than creating them from zero. However, one of the challenges that the users faced while using the new capability was validating the machine-generated summaries. It required them to review the entire court case again because they were not able to tell where the automated summaries had come from. This was the problem we focused on in this project. How might we enable users to understand better what the machine has done?
                </p>
                <p>
                Here I give only a high level overview of the design process and results of the project as it has been accepted as a case study to CHI 2021. You can read the preprint of the paper and which includes the full details of the work carried out <a target="_blank"
                href={"https://mildanor.github.io/assets/NorkuteXAI.pdf"}
                rel="noopener noreferrer">here</a>.

                </p>
                
            <h2> Design</h2>
                <p>
                In terms of the design process, a couple of different approaches were considered for translating the scores created by the data scientist on the team into highlights indicating influence of the source document text to the summary to the user and displaying them in the user interface. Overall, it was decided to keep the initial design simple. I experimented with the concept of map of the document - it indicates which parts of the document have the strongest influence on the summary created so that the user could jump directly to those document areas. Based on some initial user interviews I learned that from their perspective, the document can be divided to pages, paragraphs or sentences. 
                </p>
                <img className="img-center"style={{width: '700px' }} src={require('../img/docsum/docsum_attempts.png')} alt="Visualization" />
                <p>
                However, we had challenges with extracting the data about the positioning of words in the original pdf document when analyzing and attaching the scores to them. We were only able to indicate where the highest scores for the words were on a page level and we named this concept “Page Picker”. 
                </p>
         
            <h2>Research goals</h2>
            <p>
            We wanted to get an understanding of how helpful the highlighting based on the scores would be to the editors in their task of verifying and editing the summaries. This meant that we needed them to actually use both kinds of highlights when editing the summaries. We also wanted to know how this experience compares to editing the summaries with no highlights. I turned my designs into a web app for this purpose which was used to log and study the behaviour of users. All the experiments were designed and run by me. 
            </p>
            <img className="img-center" style={{width: '700px' }} src={require('../img/docsum/user_journey.png')} alt="User journey" />
            <h2>Development</h2>
            <p>
            The web app was built using React.js. All the data logging needed for research purposes was done on the front end using Window.localStorage API. Easy Peasy, an abstraction of redux was used to manage the state of the app in order to achieve good performance.
            </p>
            <img className="img-center" style={{width: '700px' }} src={require('../img/docsum/docsusm_final.png')} alt="Web app" />
            <h2>Outcome</h2>
            <p>
            The research found strong positive effects of having the highlights on the user experience and performance. The product team decided they wanted to integrate this feature into the product. Thomson Reuters CTO and CEO have been introduced to the results of the project and as previously mentioned, we have been given permission to write up results of the project as a paper to a conference. This also resulted in a very first patent under my and the names of others who contributed to the project or conducted follow up research in the area, filed by the company on our behalf.
            </p>
            <h2> Role</h2>
            <p>
            Lead designer, researcher and the only developer. The project, including all design, development and research work, was completed in record 6 weeks time.
            </p>
            <NavLink to={process.env.PUBLIC_URL + '/'} className="button-link">Close project</NavLink>
            </div>
            </div>
        )
    }

}