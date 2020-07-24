import React from 'react';
import './InfoPage.css';
import teams from '../../assets/teams.png';
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Info extends React.Component{
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
                <img src = {teams} alt = 'Nba teams' style= {{marginLeft:"19em",width:'60%'}}></img>
                <p className='parStyle'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Boston Celtics :( Kemba Walker, Marcus Smart, Brad Wanamaker,Tremont Waters, Carsen Edwards, Romeo Langford, Jaylen Brown, Javonte Green, Jayson Tatum, Gordon Hayward, Semi Ojeleye,  Grant Williams, Daniel Theis, Enes Kanter, Robert Williams, Tacko Fall, Vincent Poirier)</p>

                <p className='parStyle'>Brooklyn Nets :( Kyrie Irving, Spencer Dinwiddie, Garrett Temple, Tyler Johnson, Chris Chiozza,  Jamal Crawford, Jeremiah Martin, Caris LeVert, Taurean Prince, Joe Harris, Dzanan Musa, Timothe Luwawu-Cabarrot,Rodions Kurucs, Wilson Chandler, Nicolas Claxton,Kevin Durant, Michael Beasley,Jarrett Allen, DeAndre Jordan)</p>
                <p className='parStyle2'>Charlotte Hornets :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Atlanta Hawks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>

            </div>
        );
    }
}
export default Info;