import React from 'react';
import './Highlights.css';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Hightlights extends React.Component{

    constructor(props) {
        super(props);
        this.state = {url: ''};
      }
       componentDidMount(){
           let currentComponent = this;
            axios.get('http://localhost:5000/links/').then(function(res){
                let rand = Math.floor(Math.random() * Object.keys(res.data).length +1);
                axios.get(`http://localhost:5000/links/random/${rand}`).then(result => currentComponent.setState({url : result.data[0].url}));             
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
                        <Nav.Link href="/articles">Articles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/polls">Polls</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className = 'video'>
                    <iframe height="680" width="900"  
                    src={"https://www.youtube.com/embed/" + this.state.url}> 
                    </iframe>
                </div>
                <h1 className = 'hightlight'>New Nba Hightlight Ready On Every Reload</h1>
            </div>
        );
    }
}

export default Hightlights;