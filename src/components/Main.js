import React from 'react';
import LandingPage from './Landingpage';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import GISPortfolio from './ArcGIS/GIS'

import {Switch,Route} from 'react-router-dom';
import Election from './ElectionPage/election';

const Main = () => (
    <Switch>
        <Route exact path = "/" component ={LandingPage} />
        <Route path = "/projects" component ={Projects} />
        <Route path = "/contact" component ={Contact} />
        <Route path = "/resume" component ={Resume} />
        <Route path = "/GIS" component = {GISPortfolio} />
        <Route path = "/electionResults" component= {Election}/>
    </Switch>

)

export default Main;