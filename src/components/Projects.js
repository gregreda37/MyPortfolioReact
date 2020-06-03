import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton,CardText} from 'react-mdl';

import {Link} from 'react-router-dom';
import SwiftProjects from './Projects/SwiftProjects'
import CrossPlatformProjects from './Projects/CrossPlatformProjects'
import WebProjects from './Projects/WebProjects'
import CarpentryProjects from './Projects/CarpentryProjects'
import TinyHomeProjects from './Projects/TinyHomeProjects'
import GISProjects from './Projects/GISProjects'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    
    toggleCategories(){

        if(this.state.activeTab === 0){
            return(
            <SwiftProjects/>
            )
        }else if(this.state.activeTab === 1){
            return(
                <CrossPlatformProjects/>
            )
        } else if(this.state.activeTab === 2){
            return(
                <WebProjects/>
            )
        } else if(this.state.activeTab === 3){
            return(
                <CarpentryProjects/>
            )

        }else if(this.state.activeTab === 4){
            return(
                <TinyHomeProjects/>
            )

        } else {
            return(
                <GISProjects/>
            )
        }

    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
                    <Tab>Swift</Tab>
                    <Tab>Cross-Platform</Tab>
                    <Tab>Web</Tab>
                    <Tab>Carpentry</Tab>
                    <Tab>Tiny Homes</Tab>
                    <Tab>Data Science</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content>">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                    
                
            </div>

        )
    }
}
export default Projects;