import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton,CardText} from 'react-mdl';

import Assignment8 from '../ArcGIS/GISPhotos/Assingment8_NoLedger.png';
import ElectionMap from './ElectionMap.png';

class GISProjects extends Component {
    render(){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + Assignment8 + ") center / cover"}}>
                        <h1 className="project-background">G.I.S.</h1>
                    </CardTitle>
                    <CardText>
                    Geographic Information Systems (GIS): a combination of the hardware, software, and community involved in the 
                    collection, distribution, visualization, and analysis of spatial data. The concepts and theories that underpin 
                    GIS are often referred to as Geographic Information Science, and the course surveys this groundwork.
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-tree"  aria-hidden="true"/>
                            <a href="https://gregreda1.com/#/GIS">Projects</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + ElectionMap + ") center / cover"}}>
                        <h1 className="project-background">2016 Election Analysis</h1>
                    </CardTitle>
                    <CardText>
                    A deeper look into the 2016 presidential election and how different demographics leaned towards 
                    certain canidates. All sources linked below
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-tree"  aria-hidden="true"/>
                            <a href="https://gregreda1.com/#/GIS">Analysis</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            </div>

        )
    }
}
export default GISProjects;