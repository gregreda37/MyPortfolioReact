import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton,CardText} from 'react-mdl';

import TopboxLogo from '../Photos/topboxLogo.png';
import toolClassifierLogo from '../Photos/toolClassifierLogo.png';
import boxStackerLogo from '../Photos/boxStackerPro.png';
import SiincLogo from '../Photos/SiincLogo.png';
import IcebreakerLogo from '../Photos/IcebreakerLogo.png';



class SwiftProjects extends Component {
    render(){
        return(
            <div className="projects-grid">

                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + TopboxLogo + ") center / cover"}}>
                        <h1 className="project-background">Topbox Inc.</h1>
                    </CardTitle>
                    <CardText>
                    Integrated Google Maps SDK for IOS; rest API to send JSON response using queries; 
                    integrated Firebase/Firestore user registration, Data Pagination; database structure, 
                    image recognition to filter NSFW uploaded images,
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/Topbox-Contractor-Marketing" rel="noopener noreferrer" target="_blank">GitHub</a>
                            
                            </div>
                        </Button>
                        <Button>
                        <div className= "button-color">
                            <i className="fa fa-apple"  aria-hidden="true"/>
                            <a href="https://apps.apple.com/us/app/topbox-inc/id1476438064" rel="noopener noreferrer" target="_blank">App Store</a>
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + toolClassifierLogo + ") center / cover"}}>
                        <h1 className="project-background">Tool Classifier.</h1>
                    </CardTitle>
                    <CardText>
                    Integrated Apple Machine Learning Core ML technology to predict the unique tool type and present a description of what the 
                    tool is used for, trained the model using 1,000+ photos categorized and filtered using a rest API hosted locally.
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/ToolClassifierApp" rel="noopener noreferrer" target="_blank">GitHub</a>
                            
                            </div>
                        </Button>
                        <Button>
                        <div className= "button-color">
                            <i className="fa fa-apple"  aria-hidden="true"/>
                            <a href="https://apps.apple.com/us/app/tool-classifier/id1486603456" rel="noopener noreferrer" target="_blank">App Store</a>
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + boxStackerLogo + ") center / cover"}}>
                        <h1 className="project-background">Box Stacker</h1>
                    </CardTitle>
                    <CardText>
                    Box Stacker Game! Try and beat your high score by stacking as many boxes as you can. 
                    Careful with each box you stack the level speed increases!
                    </CardText>
                    <CardActions  border>
                        <Button>
                        
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/BoxStacker" rel="noopener noreferrer" target="_blank">GitHub</a>
                            
                            </div>
                        </Button>
                        <Button>
                        <div className= "button-color">
                            <i className="fa fa-apple"  aria-hidden="true"/>
                            <a href="https://apps.apple.com/us/app/box-stacker-pro/id1491111200" rel="noopener noreferrer" target="_blank">App Store</a>
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + SiincLogo + ") center / cover"}}>
                        <h1 className="project-background">Siinc</h1>
                    </CardTitle>
                    <CardText>
                    Siinc allows you to easily chat, make plans and connect with friends, new or old, or business connections, who share the same interests.
                     With Siinc, keeping up with people who matter most is easy with our integrated social calendar. Discover what your friends are up to and meet new 
                     friends through the Siinc Board where you can express your thoughts, opinions and feelings in a safe, and welcoming environment. 
                    </CardText>
                    <CardActions  border>
                        <Button>
                        <div className= "button-color">
                            <i className="fa fa-apple"  aria-hidden="true"/>
                            <a href="https://apps.apple.com/us/app/siinc/id1494528587" rel="noopener noreferrer" target="_blank">App Store</a>
                            </div>
                        </Button>
                        
                    </CardActions>

                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'275px', background: "url(" + IcebreakerLogo + ") center / cover"}}>
                        <h1 className="project-background">Icebreaker Networking</h1>
                    </CardTitle>
                    <CardText>
                    Icebreaker offers the ability to add contacts through a QR code. No longer will you have to plug in the information for each individual contact. 
                    Simply scanning another user’s QR code will create and store all their information directly onto your device. We believe Icebreaker provides an alternative
                     method that is efficient while providing friendly user experience. One great way of utilizing Icebreaker is for those individuals that come in contact with new faces at 
                     networking events, social gatherings or business meetings. Being able to scan another user’s QR code makes the process of exchanging information a breeze! Our local users feature gives you the power 
                     to search those around you using Icebreaker and add them to your contacts. 
                    </CardText>
                    <CardActions  border>
                        <Button>
                            
                            <div className= "button-color">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            <a href="https://github.com/gregreda37/Icebreaker" rel="noopener noreferrer" target="_blank">GitHub</a>
                            
                            </div>
                        </Button>
                        <Button>
                        <div className= "button-color">
                            <i className="fa fa-apple"  aria-hidden="true"/>
                            <a href="https://apps.apple.com/us/app/icebreaker-networking/id1497617871" rel="noopener noreferrer" target="_blank">App Store</a>
                            </div>
                        </Button>
                        <Button>
                        <div className= "button-color">
                            <i className="fa fa-wordpress"  aria-hidden="true"/>
                            <a href="https://icebreakerapp1.wixsite.com/icebr" rel="noopener noreferrer" target="_blank">Website</a>
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
export default SwiftProjects;