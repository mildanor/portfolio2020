import React  from 'react';
import {
    NavLink
  } from "react-router-dom";
  import giphy from '../img/beer/giphy.gif';
  import cern_thumb2 from '../img/cern/cern_thumb2.png';
  import tk_thum3d from '../img/tk/tk_thum3d.png';


//const data = 1
const Projects = Props => {

        return(
            <div>
            <div className="page-style">
                <div className='intro-text'>    
   <main>
  <span className="span-fancy"><h1 className="fancy">Hello, I'm Milda.</h1></span>
</main>
<p>
I am working at Thomson Reuters Labs in Zug, Switzerland is one of several TR labs worldwide. The Labs pursue emerging trends in technology and data driven innovation through collaborative experimentation with customers across Thomson Reuters products portfolio. 
</p>
<p>My role is focused on UX research and design of our concepts to figure out how and where to put the human in the loop in AI powered systems.
I also enjoy using my front end engineering skills as well as doing data exploration. 
‍</p>
<p  className = "paragraph">
Unfortunately all of my present (and some past) work is confidential but you can find here a selection of a few past projects. Hopefully this will give you a feel on how I like to approach solving different problems.
</p>
<h2 className ="white-h2">Projects -- </h2>
</div>
</div>

<div className="row">
  <div className="column">
    <div className="portfolio-item">
    <img src={cern_thumb2} alt="CERN" />
  <NavLink to="/windowstoolbox" className="portfolio-link">Windows Toolbox for CERN</NavLink>
    <p className = "project-title">From NICE services to Windows Toolbox, a website redesign and implementation </p>
    </div>
    </div>
    <div className="column">
  <div className="portfolio-item">
  <img src={tk_thum3d} alt="CERN" />
  <NavLink to="/tavaratkotiin" className="portfolio-link">Items to Home</NavLink>
  <p className = "project-title"> Creating large items delivery service by combining items for volume and optimizing delivery routes</p>
    </div>
  </div>
  </div>
  <div className="row">
  <div className="column">
    <div className="portfolio-item">
    <img src={giphy} alt="Just a Beer" />
   <NavLink to="/justabeer" className="portfolio-link">Just a Beer</NavLink>
    <p className = "project-title">
    Designing spontaneous social interactions </p>
    </div>
    </div>
  </div>
</div>

        )

}

export default Projects;