import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton,CardText} from 'react-mdl';

import reactLogo from '../Photos/reactLogo.png'
import JoinScreen from '../Photos/JoinScreen.jpg'

class WebProjects extends Component {
    render(){
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + reactLogo + ") center / cover"}}>
                        <h1 className="project-background">Portfolio Website</h1>
                    </CardTitle>
                    <CardText>
                    Programmed using React.js and MDL Bootstrap
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/MyReactPortfolio" rel="noopener noreferrer" target="_blank">GitHub</a>
                            </div>
                        </Button>
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                <CardTitle style={{color:'black', height:'275px', background: "url(" + JoinScreen + ") center / cover"}}>
                    <h1 className="project-background">Chat Application</h1>
                </CardTitle>
                <CardText>
                This is my chat application using Heroku for the server and Github Pages
                </CardText>
                <CardActions  border>
                    <Button>
                    
                        <div className= "button-color">
                        <i className="fa fa-github-square"  aria-hidden="true"/>
                        <a href="https://github.com/gregreda37/chat-application" rel="noopener noreferrer" target="_blank">GitHub</a>
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
export default WebProjects;