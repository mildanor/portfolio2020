import React, { Component }  from 'react';
import {
    NavLink
  } from "react-router-dom";
export default class justabeer extends Component {
    render(){
        return(
            <div>
            <div className="page-style">
            <main>
  <span className="span-fancy"><h1 className="fancy">Just a Beer.</h1></span>
</main>
                <p>Designing spontaneous social interactions. A project course at KTH Royal Institute of Technology, winter 2017. </p>
                </div>
                <div className="page-content">
                <h2> The Problem</h2>
                <p>
                            "Just a Beer” is a social application to meet new friends by creating hangouts in the app or requesting to join a hangout.  
                                
                        </p>
                        <p>
                            We all have experienced the problem of meeting new people, especially in a new place. We had faced this ourselves when we had moved to Stockholm and also while traveling. Tinder, meet ups do not quite do the job as the former is for dating and in the latter you meet in large groups typically for a specific purpose. But what if you want someone to hang out with? Go to theatre? Watch football? Or, to have just one beer.
                        </p>
                        <h2> Approach</h2>
                        <p>After field study in a couple of bars, two online experiments in Facebook and Jodel, we learned that meeting new people is a real problem. This can be true both for young people in a new place or for those that are older but would like a partner for a new or old hobby. So, we have come up with Just a Beer - a mobile app to make hangouts easy.</p>
                       <p> The diagram below illustrates the development process of our app: </p>
                       <img className="img-center"style={{width: '700px' }}src={require('../img/beer/beer_process.png')} alt="Process" />

                       
                <p>
                    The creator of the hangout has the right to select one or more people to meet up with. Unlike many other meeting platforms, we are not focusing on long discussions before the meeting and planning far in advance, but rather focusing on spontaneous meeting suggestions. 

                </p>
                <img className="img-center"style={{width: '700px' }}src={require('../img/beer/justabeer-story.png')} alt="Flow" />
                
                <p>
                    Also, to solve problems found by research to avoid unwanted people we designed out app so that each hangout event has public discussion board and a private message board which is open only for people who have been accepted to join. 
Also, we placed focus on the event rather than user profile to avoid tinder-like flavour for our app. 

                </p>
                <h2> Design and Development</h2>
                <p>
                        After the user research, analysis, paper prototyping and branding discussions we created the first clickable prototype. 
                       
                </p>
                <img className="img-center"style={{width: '700px' }}src={require('../img/beer/beer_clickable.png')} alt="Prototype 1" />
                <p>After testing it and taking the findings into account we developed a responsive web app prototype using Ionic framework which is based on Angular. We chose this framework because it allows for the usage of Android native suitable elements so since our end goal was an Android app, this was perfect for our prototyping needs. Below are some screenshots of the web app developed with Ionic, you can also explore the full prototype
                        <a href="https://zuzze.github.io/Just-a-Beer/" > here. </a>
                </p>
                <img className="img-center"style={{width: '700px' }}src={require('../img/beer/beer_ionic.png')} alt="Prototype 2" />

                
                <p>
                        Finally after testing and analysing the results of the web app we began the development of the Android app. We used Android studio for this. We chose Firebase as our database and backend solution. Below are some screenshots of the Final version of the Android app developed with Android studio:
                        
                </p>
                <img className="img-center"style={{width: '700px' }}src={require('../img/beer/beer_android.png')} alt="Prototype 3" />

                <h2> Role</h2>
                    <p>
                            We worked on this project in a team of 4. I led the user research, did the analysis of the findings which informed our further development. I also created the storyboards, drew paper prototypes that we later discussed and combined. I worked on the clickable prototype and moved it to InVision app. In the web app development stage I worked on home and profile views of the Ionic app including styling and adding the logic from a static json file we used. Finally, in the Android app, I was worked on the profile, create hangout views, styling. I also implemented the logic for the profile when connecting the app with Firebase making the calls and passing the data from other fragments using intent.
                    </p>
                    <NavLink to="/" className="button-link">Close project</NavLink>
                    </div>
            </div>
        )
    }

}