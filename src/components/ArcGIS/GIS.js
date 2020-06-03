import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Assignment1 from './GISPhotos/Assignment1.png';
import Assignment2 from './GISPhotos/Assignment2.png';
import Assignment3 from './GISPhotos/Assignment3.png';
import Assignment4 from './GISPhotos/Assignment4.png';
import Assignment5 from './GISPhotos/Assignment5.png';
import Assignment6EC from './GISPhotos/Assignment6EC.png';
import Assignment7 from './GISPhotos/Assignment7.png';
import Assignment8 from './GISPhotos/Assignment8.png';
import Assignment9 from './GISPhotos/Assignment9.png'; 

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
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Twelve</h1>
                        <iframe width="600" height="600"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://www.arcgis.com/apps/MapSeries/index.html?appid=bd2b35a934f64449947b6cc093e12f49"></iframe>                    
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Midterm Project</h1>
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSM2kU-7NdswHTurfhzdMqLree_3olcEfHkvzl5o-KH0TBLky18UoYHPI-LUfcedw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="600" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </Cell>
            
                </Grid>
            </div>
        )
    }
}
export default GISPortfolio;