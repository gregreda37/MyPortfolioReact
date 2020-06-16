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
import Assignment13 from './GISPhotos/Assignment13.png'; 



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

                        <h1 style={{color:'white',fontSize:'24px',width:'220px'}}>Assignment Nine</h1>
                        <img
                        src={Assignment9}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Ten</h1>
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1c-ioej0EC9j5d8uVupYsC2Gvk0npy5Ux" width="600" height="600"></iframe>
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Assignment Twelve</h1>
                        <iframe width="600px" height="600px" src="http://www.arcgis.com/apps/MapSeries/index.html?appid=bd2b35a934f64449947b6cc093e12f49" frameborder="0" scrolling="no"></iframe>                   
                        <h1 style={{color:'white',fontSize:'24px',width:'200px'}}>Midterm Project</h1>
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSM2kU-7NdswHTurfhzdMqLree_3olcEfHkvzl5o-KH0TBLky18UoYHPI-LUfcedw/embed?start=false&loop=false&delayms=3000" frameborder="0" width="600" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                        <h1 style={{color:'white',fontSize:'20px',width:'200px'}}>Assignment Thirteen</h1>
                        <img
                        src={Assignment13}
                        alt="Myface"
                        className="gis-photo"
                        />
                        <h1 style={{color:'white',fontSize:'20px',width:'200px'}}>Assignment Fifteen</h1>
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRJcAZEBm5Lg3C4dK4c0C_JED8rl77HZJCE-7HdS9eMqftftHtqSQpbsyfZBadm3Q/embed?start=false&loop=false&delayms=3000" frameborder="0" width="600" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                        <h1 style={{color:'white',fontSize:'20px',width:'200px'}}>Assignment Sixteen</h1>
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQrST1s4bpBkwvIKg3Q4gbg785XYQncpKLUjo1Ji1zDoRBwl6wL9pPPhDH1XiSajQ/embed?start=false&loop=false&delayms=3000" frameborder="0" width="600" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                        <h1 style={{color:'white',fontSize:'20px',width:'200px'}}>Assignment Seventeen</h1>
                        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT0ar7NpZ0L_sKSDiK-dekdJPHJPREddXwnDuKEHdnPHWLZW3hK18e8s5osgECMNQ/embed?start=false&loop=false&delayms=3000" frameborder="0" width="600" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                        <h1 style={{color:'white',fontSize:'20px',width:'200px'}}>R Embed</h1>
                        <iframe width='600' height='600' src='https://rdrr.io/snippets/embed/?code=library(ggplot2)%0Alibrary(ggmap)%0Alibrary(maps)%0Alibrary(mapdata)%0A%0A%23mapping%20the%20US%20-%20default%20filled%20black%20polygon%0Ausa%20%3C-%20map_data(%22usa%22)%0Ausa%20%3C-%20map_data(%22usa%22)%20%23%20we%20already%20did%20this%2C%20but%20we%20can%20do%20it%20again%0Aggplot()%20%2B%20geom_polygon(data%20%3D%20usa%2C%20aes(x%3Dlong%2C%20y%20%3D%20lat%2C%20group%20%3D%20group))%20%2B%20%0A%20%20coord_fixed(1.3)%0A%0A%23mapping%20the%20US%20-%20with%20red%20outline%20(hollow)%0Aggplot()%20%2B%20%0A%20%20geom_polygon(data%20%3D%20usa%2C%20aes(x%3Dlong%2C%20y%20%3D%20lat%2C%20group%20%3D%20group)%2C%20fill%20%3D%20NA%2C%20color%20%3D%20%22red%22)%20%2B%20%0A%20%20coord_fixed(1.3)%0A%0A%23mapping%20the%20US%20-%20illustrating%20states%20with%20different%20colors%0Astates%20%3C-%20map_data(%22state%22)%0Adim(states)%0A%0Aggplot(data%20%3D%20states)%20%2B%20%0A%20%20geom_polygon(aes(x%20%3D%20long%2C%20y%20%3D%20lat%2C%20fill%20%3D%20region%2C%20group%20%3D%20group)%2C%20color%20%3D%20%22white%22)%20%2B%20%0A%20%20coord_fixed(1.3)%20%2B%0A%20%20guides(fill%3DFALSE)%20%20%23%20do%20this%20to%20leave%20off%20the%20color%20legend%0A%0A%23extracting%20and%20mapping%20New%20York%20from%20the%2050%20states%0Anj_df%20%3C-%20subset(states%2C%20region%20%3D%3D%20%22new%20jersey%22)%0A%0Acounties%20%3C-%20map_data(%22county%22)%0Anj_county%20%3C-%20subset(counties%2C%20region%20%3D%3D%20%22new%20jersey%22)%0A%0Anj_base%20%3C-%20ggplot(data%20%3D%20nj_df%2C%20mapping%20%3D%20aes(x%20%3D%20long%2C%20y%20%3D%20lat%2C%20group%20%3D%20group))%20%2B%20%0A%20%20coord_fixed(1.3)%20%2B%20%0A%20%20geom_polygon(color%20%3D%20%22black%22%2C%20fill%20%3D%20%22gray%22)%0Anj_base%20%2B%20theme_nothing()%0A%0A%23visualizing%20New%20York%20counties%0Anj_base%20%2B%20theme_nothing()%20%2B%20%0A%20%20geom_polygon(data%20%3D%20nj_county%2C%20fill%20%3D%20NA%2C%20color%20%3D%20%22white%22)%20%2B%0A%20%20geom_polygon(color%20%3D%20%22black%22%2C%20fill%20%3D%20NA)%20%20%23%20get%20the%20state%20border%20back%20on%20top%20' frameborder='0'></iframe>
                        <h1 style={{color:'white',fontSize:'20px',width:'200px'}}>Assignment 18</h1>
                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRG39cz-DDJdrPobAmKGxcHigADcjYm6e5AFW9TPepJaSUgZ3pEdaK95qxRKXs3_w/pubhtml?widget=true&amp;headers=false" frameborder="0" width="600" height="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                    </Cell>
            
                </Grid>
            </div>
        )
    }
}
export default GISPortfolio;