import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Assignment1 from './Photos/GIS/Assignment1.png';
import Assignment2 from './Photos/GIS/Assignment2.png';
import Assignment3 from './Photos/GIS/Assignment3.png';
import Assignment4 from './Photos/GIS/Assignment4.png';
import Assignment5 from './Photos/GIS/Assignment5.png';
import Assignment6EC from './Photos/GIS/Assignment6EC.png';
import Assignment7 from './Photos/GIS/Assignment7.png';
import Assignment8 from './Photos/GIS/Assignment8.png';
import Assignment9 from './Photos/GIS/Assignment9.png';
import MapView from './ArcGIS/Mapview'

class GISPortfolio extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className = "project-background-gradient">
                    <Cell col={1}>
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment One</h1>
                        <img
                        src={Assignment1}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Two</h1>
                        <img
                        src={Assignment2}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Three</h1>
                        <img
                        src={Assignment3}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Four</h1>
                        <img
                        src={Assignment4}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Five</h1>
                        <img
                        src={Assignment5}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Six</h1>
                        <img
                        src={Assignment6EC}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Seven</h1>
                        <img
                        src={Assignment7}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Eight</h1>
                        <img
                        src={Assignment8}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <h1 style={{color:'white',fontSize:'24px',width:'250px'}}>Assignment Eight EC</h1>
                        <iframe width="600" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Age Adjusted Influenza Death" src="//www.arcgis.com/apps/Embed/index.html?webmap=b3330cfb0f38447f8613273772327c37&extent=-76.2484,39.4257,-70.1894,41.3337&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light"></iframe>

                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Nine</h1>
                        <img
                        src={Assignment9}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Ten</h1>
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1c-ioej0EC9j5d8uVupYsC2Gvk0npy5Ux" width="600" height="600"></iframe>
                    </Cell>
            
                </Grid>


                
    
            </div>
        )
    }
}
export default GISPortfolio;