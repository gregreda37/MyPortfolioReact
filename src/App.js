import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/Main'
import Navbar from './components/Navbar'
import {Link} from 'react-router-dom';


function App() {

  return (
    <div className="demo-big-content">
    <Layout>
        
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/">Greg's Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Navbar/>

        <Content>
            <div className="page-content" />
            <Main />

        </Content>
    </Layout>
</div>

  );
}

export default App;
