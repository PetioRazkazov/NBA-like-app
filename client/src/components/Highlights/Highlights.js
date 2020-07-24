import React from 'react';
import './Highlights.css';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Hightlights extends React.Component{

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { url: '',id: 1};
        axios.get('http://localhost:5000/links/').then(function(res){
                let rand = Math.floor(Math.random() * Object.keys(res.data).length +1);
                axios.get('http://localhost:5000/links/random',{params: {id:rand}}).then(result => this.setState({url: result.data[rand].url}));             
            });
      }
    render(){
        return(
            <div className = 'mainContainer'>
                <div className = 'header'>
                    <span className = 'mainHeader'>National Basketball Association</span>
                    <Link to = '/' className = 'logButton' onClick={this.handleClick}>
                        Log out
                    </Link>
                </div>
                <Nav activeKey="/main" className= 'navbar'>
                    <Nav.Item>
                        <Nav.Link href="/main">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/highlights">Highlights</Nav.Link>
                    </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="link-2">Articles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Polls</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className = 'video'>
                    <iframe height="680" width="900"  
                    src="https://www.youtube.com/embed/DsxxgJTXr8Y"> 
                    </iframe>
                </div>
                <h1 className = 'hightlight'>New Nba Hightlight Ready On Every Reload</h1>
            </div>
        );
    }
}

export default Hightlights;