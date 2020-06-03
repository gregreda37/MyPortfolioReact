import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton,CardText} from 'react-mdl';

import sixteenTinyHome from '../Photos/sixteenTinyHome.jpg';
import twentyTinyHome from '../Photos/twentyTinyHome.jpeg';
import twentyfourTinyHome from '../Photos/twentyfourTinyHome.jpg';

class TinyHomeProjects extends Component {

    render(){
        return(

            <div className="projects-grid">
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + sixteenTinyHome + ") center / cover"}}>
                        <h1 className="project-background">16' Tiny Home</h1>
                    </CardTitle>
                    <CardText>
                    16’x8'x13' built on a heavy duty dual-axel trailer with dual lofts and 5 windowsstrategically placed throughout the home. Fully 
                    insulated with interior paneling and exterior vinyl siding. Wired 8 Electrical outlets strategically placed throughout the home with 
                    a 30 amp breaker standard.
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/16-tiny-house#23994441-049c-4ea6-b9d8-3264a21e723a" rel="noopener noreferrer" target="_blank">Gallery</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + twentyTinyHome + ") center / cover"}}>
                        <h1 className="project-background">20' Tiny Home</h1>
                    </CardTitle>
                    <CardText>
                    20'x8'x13' built on a heavy duty dual-axel trailer with dual lofts and 5 windowsstrategically placed throughout the home. Fully insulated with 
                    interior paneling and exterior vinyl siding. Wired 13 Electrical outlets strategically placed throughout the home with a 30 amp breaker standard.
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/20-tiny-house#04da575f-9444-4ca4-b91e-6101e7c09126" rel="noopener noreferrer" target="_blank">Gallery</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + twentyfourTinyHome + ") center / cover"}}>
                        <h1 className="project-background">24' Tiny Home</h1>
                    </CardTitle>
                    <CardText>
                    24’x8'x13' built on a heavy duty dual-axel trailer with two lofts and 8 windowsstrategically placed throughout the home. 
                    Fully insulated with interior cedar woodpaneling and exterior vinyl siding. Wired 13 electrical outlets strategically placed 
                    throughout the home with a 30 amp breaker standard and four light fixtures. Rough plumbing for kitchen sink, shower, toilet and bathroom sink installed.
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-google"  aria-hidden="true"/>
                            <a href="https://ukrainianrestoration.com/24-tiny-house#41309f9e-a99b-4790-8d76-f8a24a98577d" rel="noopener noreferrer" target="_blank">Gallery</a>
                            
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
export default TinyHomeProjects;