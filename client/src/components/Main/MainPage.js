import React from 'react';
import './MainPage.css';
import { Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

class Main extends React.Component{
    handleClick(event) {
        localStorage.removeItem('tokens');
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
                        <Nav.Link eventKey="link-2">Polls</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className = 'historyContainer'>
                    <h1 className = 'title'>Welcome to the (un)official NBA site</h1>
                    <p className = 'nbaHistory'>
                        The National Basketball Association (NBA) is an American men's professional basketball league. 
                        It is composed of 30 teams (29 in the United States and 1 in Canada) and is one of the four major professional sports leagues in the United States and Canada. 
                        It is widely considered to be the premier men's professional basketball league in the world.
                        The league was founded in New York City on June 6, 1946, as the Basketball Association of America (BAA).
                        It changed its name to the National Basketball Association on August 3, 1949, after merging with the competing National Basketball League (NBL).
                        The NBA's regular season runs from October to April, with each team playing 82 games. 
                        The league's playoff tournament extends into June. As of 2015, NBA players are the world's best paid athletes by average annual salary per player.
                    </p>
                    <div className= 'logoContainer'>
                    <p className='logoExplain'>For more history of the nba and <br></br>to see all the teams<br></br>Click the logo</p>
                    <Link to = '/moreInfo' className='logo'>
                        <input type='image' src = {logo} alt='nablogo' className ='logo'/>
                    </Link>
                </div>
                </div>
            </div>
        );
    }
}

export default Main;