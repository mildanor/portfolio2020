import React, { Component }  from 'react';
export default class Who extends Component {
    render(){
        return(
            <div>
            <div className="page-style">
                <img className="img-left"style={{width: '700px' }}src={require('../img/tk/me_talking.png')} alt="Me" />
                <h1 className ="white-h2">A little more about me</h1>
                <p>
                I research, design and code to solve problems. Prior joining Thomson Reuters labs I worked at Nokia and CERN in dual Designer/Front-end Developer roles and completed a masters in masters in Human Computer Interaction and Design. I also have a bachelor's degree in Psychology. </p>
                <p> Before beginning my career in technology, I spent a few years investigating social biases and consumer habits among other topics in market and academic research settings. I am passionate about bringing in learnings that psychological researchers have accrued about human behaviour into the work that I do today as a designer and engineer. </p>

<p>I have experience with a variety qualitative and quantitative research methods: designing studies, collecting data and carrying out the analysis including the quantitative ones - I used to spend lots of quality time with SPSS and lately started using Python for data exploration tasks. I have used different design tools to create artefacts throughout the different stages of the design processes of my projects such as Sketch, Figma, Balsamiq, Adobe XD and I experiment with new ones when I can. My technology stack is front-end focused: React.js, Javascript, CSS, SASS, HTML. I have also worked with Node.js, Openshift, Git, setting up continuous integration.
                </p>
               <h2 className="white-h2"> <a href="mailto:milda.norkute@bath.edu">Say hi</a></h2>
               <div className="resume">
               <h1 className ="white-h2">Work Experience</h1>
                <p>2019 - Present-- Designer at Thomson Reuters Labs (Zug, Switzerland)</p>
                <p>2018 - 2019-- Designer and Front End Engineer at CERN (Geneva, Switzerland)</p>
                <p>2017 Summer-- Designer and Developer at Nokia (Espoo, Finland)</p>
                <p>2014 - 2016-- Research Executive at Newsworks (London, United Kingdom)</p>
                <p>2012 - 2013-- Research Assistant at New Zealand Institute of Language Brain and Behaviour (Christchurch, New Zealand)</p>
                <h1 className ="white-h2">Education</h1>
                <p>2016 - 2018-- Masters Degree in Human Computer Interaction and Design
                <span> KTH Royal Institute of Technology (Stockholm, Sweden) & Aalto University (Helsinki, Finland)</span></p>
                <p>2011 - 2014-- Bachelor of Science in Psychology at University of Bath (United Kingdom) </p>
                <h1 className ="white-h2">Recognition</h1>
                <p>2018-- Google I/O Conference Ticket and Travel Grant Recipient</p>
                <p>2018-- Interaction Design Association (IXDA) Student Design Challenge Finalist</p>
                <p>2017-- Finnair's challenge 2nd place winner at Europe's largest hackathon Junction</p>
                <p>2017-- Academic Excellence Scholarship by Aalto University</p>
                <p>2017-- NASA Europa Challenge Finalist</p>
                <p>2016-- EIT Digital Academic Excellence Scholarship for two years of masters degree</p>
                <p>2014-- Department of Psychology Award for the Best Dissertation, University of Bath</p>
                <p>2014-- The Bath Award for contribution to community, University of Bath</p>
                <p>+ research projects I worked on at Newsworks 2014-2016 received awards from the Market Research Society in the UK</p>
                </div>
            </div>
            </div>
        )
    }

}