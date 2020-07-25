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
                
                <p className='parStyle'>Chicago Bulls :( Ryan Arcidiacono, Zach LaVine,  Tomas Satoransky, Kris Dunn,Shaquille Harrison,Ryan Arcidiacono, Coby White, Adam Mokoka,CMax Strus,Otto Porter,Denzel Valentine, Chandler Hutchison,Lauri Markkanen,Thaddeus Young,Wendell Carter Jr.,Daniel Gafford,Luke Kornet, Cristiano Felicio)</p>
                <p className='parStyle2'>Cleveland Cavaliers :( Collin Sexton, Darius Garland,  Dante Exum,Matthew Dellavedova,Sheldon McClellan, Matt Mooney,Cedi Osman,Kevin Porter Jr.,Alfonzo McKinnie, Dean Wade,Andre Drummond, Kevin Love,Larry Nance Jr.,Tristan Thompson,Jordan Bell,Ante Zizic,Dylan Windler,Sir'Dominic Pointer)</p>
                
                <p className='parStyle'>Dallas Mavericks:( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Denver Nuggets :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Detroit Pistons :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Golden State Warriors :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Houston Rockets:( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Indiana Pacers :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>LA Clippers :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Los Angeles Lakers :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Memphis Grizzlies :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Miami Heat :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>Milwaukee Bucks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Minnesota Timberwolves :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>New Orleans Pelicans:( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>New York Knicks :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>

                <p className='parStyle'>Oklahoma City Thunder:( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Orlando Magic :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>

                <p className='parStyle'>Philadelphia 76ers :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Phoenix Suns :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>

                <p className='parStyle'>Portland Trail Blazers :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Sacramento Kings :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                
                <p className='parStyle'>San Antonio Spurs :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Toronto Raptors :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>

                <p className='parStyle'>Utah Jazz :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
                <p className='parStyle2'>Washington Wizards :( Trae Young, Jeff Teague, Brandon Goodwin,Kevin Huerter,Treveon Graham,De'Andre Hunter,DeAndre' Bembry,Cam Reddish,Charlie Brown,John Collins,Vince Carter, Clint Capela,Skal Labissiere,Dewayne Dedmon,Bruno Fernando,Damian Jones)</p>
            </div>
        );
    }
}
export default Info;