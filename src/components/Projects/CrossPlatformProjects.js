import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton,CardText} from 'react-mdl';
import merchandiseLogo from '../Photos/merchandiseLogo.png';
import flutter from '../Photos/flutter.jpeg';


class CrossPlatformProjects extends Component {
    render(){
        return(
            <div className="projects-grid">
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + merchandiseLogo + ") center / cover"}}>
                        <h1 className="project-background">The Beach Co.</h1>
                    </CardTitle>
                    <CardText>
                    In our mobile application we make it easy to browse our merchandise and select your unique style. Set your happiness level to see 
                    each day how happy you were. Select the type of apparel you’d like to look at and get a quick glimpse on the app view. When you’re 
                    ready to purchase select the web view and be directed to our store. If you happiness hasn’t increased from the last day then it won’t be recorded!
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/TheBeachCoAndroid" rel="noopener noreferrer" target="_blank">GitHub</a>
                            
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + merchandiseLogo + ") center / cover"}}>
                        <h1 className="project-background">Doctor Lock</h1>
                    </CardTitle>
                    <CardText>
                    A cross compatible platform for doctors to check in and keep patients records. Patients are able to 
                    download the mobile application to view the doctors notes. This application was developed using Flutter

                    </CardText>
                    <CardActions  border>
                        <Button>
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/DoctorLock" rel="noopener noreferrer" target="_blank">GitHub</a>
                            
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
export default CrossPlatformProjects;