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
  <span className="span-fancy"><h1 className="fancy">Reuters Connect.</h1></span>
</main>
                <p>Designing advanced search and sidebar, summer 2021. </p>
                </div>
                <div className="page-content">
                <h2> Problem - advanced search</h2>
                <p>
                Reuters Connect offers single-platform access to all Reuters content, dating back to 1896. I was responsible for delivering technological innovations and features for the primary agency news product at Reuters. Reuters Connect users include editors at newspapers, broadcasters but can also be organizations interested in researching specific historical topics within the news archives. For this reason, search is an important feature of Reuters Connect.
              </p>
                <p>
                The product managers at Reuters Connect inspect both at the usage of different features from the data that is logged but also conduct interviews with customers. From the data, they could see that not many users knew that Reuters Connect had advanced search features - for example that they could search by topic codes or even conduct a Boolean search. Therefore, my goal with this work was to make the advanced search features more discoverable.
                </p>
                
            <h2> Design</h2>
                <p>
                My work focused on finding a way to integrate these new features into the existing UI without taking up too much space. It also involved repositioning some of the UI elements, which had to be done taking into account the existing design system.
                </p>
                <img className="img-center"style={{width: '700px' }} src={require('../img/reuters/boolean2.png')} alt="Advanced search" />
   
            <h2>Problem - sidebar</h2>
            <p>
            I also worked on designing the sidebar - it’s primary purpose was to make filters as well as the content clusters (Editor’s choice, trending, etc) that are typically visible at the top of the home page before search is conducted more discoverable. Since some of the searches can involve quite a few filters combinations, it was also decided that saved searches could live here to make them more accessible. 
            </p>
            <img className="img-center" style={{width: '600px' }} src={require('../img/reuters/sideb.png')} alt="Sidebar" />
            <h2>Design - sidebar</h2>
            <p>
            From user interviews which I helped conduct (in Spanish) we learned that the sidebar should be collapsable. This is in case the users want to focus on seeing as many search results as possible. So the main challenge was to make sure the sidebar would not be forgotten once it collapsed. Besides this the work was mostly focused around positioning the different elements on the sidebar to find both functional and aesthetically pleasant option.
            </p>
            <h2>Outcome</h2>
            <p>
                The features were launched to a limited amount of users to test them. We ran some interviews to get user feedback on the new features and they were very positively received. More quantitative feedback is being collected by product managers. 
            </p>
            <img className="img-center" style={{width: '600px' }} src={require('../img/reuters/d sys.png')} alt="Design system" />
            <h2> Role</h2>
            <p>
            UX/UI designer, UX researcher - the requirements were not analyzed and gathered by me but I did help to plan and run interviews to collect feedback on the sidebar and advanced search when it was enabled for a limited number of users. Through this work I also contributed to the evolution of Reuters Connect design system and its components. Also please note some UI elements have been blurred out or have changed meaning due to confidentiality issues.

            </p>
            <NavLink to={process.env.PUBLIC_URL + '/'} className="button-link">Close project</NavLink>
            </div>
            </div>
        )
    }

}