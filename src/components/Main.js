import React from 'react';
import LandingPage from './Landingpage';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import GISPortfolio from './GIS'
import Mapview from './ArcGIS/Mapview'

import {Switch,Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path = "/" component ={LandingPage} />
        <Route path = "/projects" component ={Projects} />
        <Route path = "/contact" component ={Contact} />
        <Route path = "/resume" component ={Resume} />
        <Route path = "/GIS" component = {GISPortfolio} />
        <Route path = "/Mapview" component = {Mapview} />
    </Switch>

)

export default Main;