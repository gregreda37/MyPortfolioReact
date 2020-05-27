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
import MapView from './ArcGIS/Mapview'

class GISPortfolio extends Component {
    render(){
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className = "project-background-gradient">
                    <Cell col={1}>
                        <img
                        src={Assignment1}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <img
                        src={Assignment2}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <img
                        src={Assignment3}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <img
                        src={Assignment4}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <img
                        src={Assignment5}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <img
                        src={Assignment6EC}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <img
                        src={Assignment7}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <img
                        src={Assignment8}
                        alt="Myface"
                        className="gis-photo"
                        />
                    </Cell>
                </Grid>
                <MapView/>
    
            </div>
        )
    }
}
export default GISPortfolio;