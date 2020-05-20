import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Assignment1 from './Photos/Assignment1.png';
import Assignment2 from './Photos/Assignment2.png';

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
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default GISPortfolio;