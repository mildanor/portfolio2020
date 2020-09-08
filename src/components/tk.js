import React, { Component }  from 'react';
import {
    NavLink
  } from "react-router-dom";
export default class tk extends Component {
    render(){
        return(
            <div>
            <div className="page-style">
            <main>
  <span className="span-fancy"><h1 className="fancy">Items to Home.</h1></span>
</main>
                <p>Creating large items delivery service by combining items for volume and optimizing delivery routes. 5 month long design project at Aalto University in the field of urban mobility, spring 2017.</p>
                </div>
                <div className="page-content">
                <h2>The Problem</h2>
                                <img className="img-right"style={{width: '490px' }}src={require('../img/tk/tk_concept.png')} alt="Our approach" />

                            <p>
                                The focus of the first sprints was finding problems worth solving through extensive user research in mobility area. We learned that there are many active online second hand item buying and selling markets in Finland: from facebook groups to tori.fi and others. From interviews and online surveys we learned that not as many people participate in those because often after buying the item they have no way of transporting it. This was especially for true for items such as sofas, beds and other big items. Most of the delivery options available for those were really expensive. 
                            </p>
                            <p>
                                So we started to look for ways on how we could challenge that. After more research we learned about existing peer to peer delivery service which didn’t seem to be able to pick up volumes for the same employment laws that uber is struggling in Finland. So after ruling this and several other concepts out through extensive research, we came up with Tavarat Kotiin or Items2Home.
                            </p>

                <h2>Approach and Solution</h2>
                            <p>
                                Items2Home is a service which does multiple deliveries on the same route by combining pick ups from multiple sellers and delivering to multiple buyers. 
                                <img className="img-center"style={{width: '700px' }}src={require('../img/tk/TK2HOW.png')} alt="Our approach" />

                                We researched laws, competition, relationships between buyers and sellers online markets to understand how to tackle trust, payment and scheduling issues.  In total we conducted 64 experiments informing the development of our concept: both the user interface of the web service as well as the business model and how the communication on the delivery days would work.

                            </p>
                    
                            
                            <img className="img-center"style={{width: '700px' }}src={require('../img/tk/tk_thum3d.png')} alt="Our approach" />

                  
                   <p>
                    Our MVP was a van going around Helsinki area once a week. Buyers or sellers could order deliveries though our web app. On the day of the delivery and the driver would be able to see his route for item delivery through an app, delivering them one by one.
                   </p>
                    <p>
                        To learn more on how our service works and how we validated it you can watch our concept pitch which was delivered by me.

                    </p>
                       <iframe className="img-center" title = "tk_picth" width="600px" height="400px"src="https://www.youtube.com/embed/8W8ewiJeE6Y" frameBorder="0" allowFullScreen></iframe>
                        
                        <p> We got the highest possible grade for our work and a special mention for exceptionally high quality materials and well informed experiments.</p>
                            <h2>Role</h2>
                           <p>I was leading most of our experiments in our team of 5 people. I created many of the experiment materials including low-fidelity prototypes, scenarios, questionnaires and other probes. I also created the designs of handouts, posters (Adobe InDesign & Photoshop), and 7/10 of our presentations. In addition, to this I created user flow of our web service prototype for the customers and also worked on the high fidelity prototype. </p>
                        
                        <p>To find out more about our concept visit our <a href="https://item2home.wordpress.com/" > landing page </a> which also contains link to our final prototype.
                            </p> 
                            <NavLink to="/" className="button-link">Close project</NavLink>
                            </div>
            </div>
        )
    }

}