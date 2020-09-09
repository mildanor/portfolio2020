import React, { Component }  from 'react';
import {
    NavLink
  } from "react-router-dom";
export default class cern extends Component {
    render(){
        return(
            <div>
                <div className="page-style">
                <main>
  <span className="span-fancy"><h1 className="fancy">Windows Toolbox.</h1></span>
</main>
                <p>From NICE services to Windows Toolbox, 2018. A website redesign and implementation for CERN, European research organization that operates the largest particle physics laboratory in the world. </p>
                </div>
                <div className="page-content">
                <h2> The Problem</h2>
                <p>The primary intended purpose of the Windows services website at CERN, also known as NICE services is being tool for troubleshooting Windows computers at CERN.
                However I only learned this after the first set of interviews I conducted with the people in charge of looking after the website and the Windows services at CERN in general because this was not clear from the website. Below is a screenshot of what it looked like when I started working on it:
                </p>
                <img className="img-center"style={{width: '700px' }}src={require('../img/cern/cern_old.png')} alt="Old NICE website" />
                <p>
          After interviews, user group and organisational requirements analysis I learned that the Windows system at CERN is a pretty complex one too. A windows computer could be hardened, locally or centrally managed. And while these terms did not mean much for a technical person, they did have impact on end user experience. Further to this, since the system was this complex, many of departments at CERN who used Windows hired people tasked specifically with helping set up and manage Windows computers. And while IT department was aware of this they did not realise these people have come up a middleman between them and the end users.
                </p>
                <img className="img-center"style={{width: '700px' }} src={require('../img/cern/cardsort.png')} alt="Card sorting experiment" />
                <p>
                    Therefore my challenge for this project was to simplify this complexity for end users- give them only key facts they needed to know and to give them tools to be able to work and troubleshoot with their computers more independently.
            </p>
            <h2> Design Process </h2>
                <p>
                I conducted card sorting experiment to not only learn how end users would organize the content and to inform the information architecture but also to learn which of the services currently living on the website could be more useful to a wider variety of people.
                </p>
                <p>
                    Using the data I collected, after several stages of storyboarding, wireframing, validating and throwing away ideas a much cleaner and simpler version of Windows services website was born.
            </p>
            <img className="img-center" style={{width: '1000px' }} src={require('../img/cern/wireframes.png')} alt="Wireframing" />
            <p>
                    Services were renamed, categorised into basic and advanced tools, and they also had help articles accompanying each relevant service to save users time on trying to find how to do a specific task. 
            </p>
            <img className="img-center" style={{width: '700px' }} src={require('../img/cern/new_site_map.png')} alt="New sitemap" />

            <p>
                    Further to this, I built relationships with local supporters and with their help created more tailored and relevant help contents including introducing the idea to feature frequently asked questions at the top and have a starters kit for new users.
            </p>
            <h2> Development </h2>
            <p>
                   Once the new design concept was tested with the users and approved by the IT department I started working on it as lead front end developer together with another person who was responsible for the back end of the service. We were responsible for the design of the technical architecture of the service too.
                   Technologies I worked with were React.js, SCSS, Webpack, Node.js, Openshift and others. I implemented SSO, routing restrictions and communications with various APIs from the client as well as a system to store and search help articles within the application.
            </p>
             <img className="img-center" style={{width: '600px' }} src={require('../img/cern/cern_tech.png')} alt="Technical architecture" />
             <h2> Reflection </h2>
            <p>
                Due to limited resources and the time it took some key stakeholders to agree on some details for this project we had a very its tight timeframe for development. Hence due to my dual responsibility as developer/designer I ran out of time to experiment more with the visual design of this website, try different styling options etc. 
                because our focus agreed with the IT department was to build something functional as soon as possible. This would be one improvement area I would suggest for this work. 
            </p>
            <img  className="img-center" style={{width: '700px' }} src={require('../img/cern/cern_UI.png')} alt="UI experiments" />

            <img  className="img-center" style={{width: '700px' }} src={require('../img/cern/cern_web.png')} alt="Final new website" />
            <h2> Role</h2>
            <p>I was the lead UX researcher, designer and front end engineer in this project. I collaborated with one other developer who worked on the backend.</p>
            <NavLink to={process.env.PUBLIC_URL + '/'} className="button-link">Close project</NavLink>
            </div>
            </div>
        )
    }

}