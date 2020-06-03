import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton,CardText} from 'react-mdl';

import staircase from '../Photos/staircase.jpg'
import carpentryPhoto from '../Photos/carpentryPhoto.jpg';
import garden from '../Photos/garden.jpg'

class CarpentryProjects extends Component {
    render(){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + carpentryPhoto + ") center / cover"}}>
                        <h1 className="project-background">Deck Repair</h1>
                    </CardTitle>
                    <CardText>
                    General Contracting Company Learned 3D modeling software to design tiny homes, Designed blueprints and 
                    sketches using Xactimate Software, Worked with engineers and architects to optimize structure of tiny homes
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/portfolio" rel="noopener noreferrer" target="_blank">Gallery</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + staircase + ") center / cover"}}>
                        <h1 className="project-background">Staircase Install</h1>
                    </CardTitle>
                    <CardText>
                    Setting footings for staircase foundation, leveling, Utilized time management skills needed to meet specific deadlines, 
                    Tasked with continually learning new skills to adapt to the different projects
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/portfolio" rel="noopener noreferrer" target="_blank">Gallery</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + garden + ") center / cover"}}>
                        <h1 className="project-background">Garden</h1>
                    </CardTitle>
                    <CardText>
                    Setting footings for staircase foundation, leveling, Utilized time management skills needed to meet specific deadlines, 
                    Tasked with continually learning new skills to adapt to the different projects
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/portfolio" rel="noopener noreferrer" target="_blank">Gallery</a>
                            
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
export default CarpentryProjects;