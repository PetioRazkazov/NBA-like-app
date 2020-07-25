import React from "react";
import ReactDOM from "react-dom";
import * as Survey from "survey-react";
import "./Polls.css";
import "survey-react/survey.css";
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class SurveyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCompleted: false };
    this.onCompleteComponent = this.onCompleteComponent.bind(this);
  }
  onCompleteComponent() {
    this.setState({ isCompleted: true });
  }
  render() {

    var surveyValueChanged = function (sender, options) {
        var el = document.getElementById(options.name);
        if (el) {
            el.value = options.value;
        }
    };
    
    let json = {
      questions: [
        {
          type: "checkbox",
          name: "Nba",
          title: "Which team is going to win the NBA championship?",
          colCount: 5,
          choicesOrder: "asc",
          choices: [
            "Atlanta Hawks",
            "Boston Celtics",
            "Brooklyn Nets",
            "Charlotte Hornets",
            "Chicago Bulls",
            "Cleveland Cavaliers",
            "Dallas Mavericks",
            "Denver Nuggets",
            "Detroit Pistons",
            "Golden State Warriors",
            "Houston Rockets",
            "Indiana Pacers",
            "LA Clippers",
            "Los Angeles Lakers",
            "Memphis Grizzlies",
            "Miami Heat",
            "Milwaukee Bucks",
            "Minnesota Timberwolves",
            "New Orleans Pelicans",
            "New York Knicks",
            "Oklahoma City Thunder",
            "Orlando Magic",
            "Philadelphia 76ers",
            "Phoenix Suns",
            "Portland Trail Blazers",
            "Sacramento Kings",
            "San Antonio Spurs",
            "Toronto Raptors",
            "Utah Jazz",
            "Washington Wizards"
          ]
        },
        {
            type: "checkbox",
            name: 'bestTeam',
            title: "Which team is the best in the West",
            colCount: 3,
            isRequired: true,
            choicesOrder: "asc",
            choices:[
                "Los Angeles Lakers",
                "Los Angeles Clippers",
                "Denver Nuggers",
                "Utah Jazz",
                "Oklahoma City Thunder",
                "Houston Rockets",
                "Dallas Mavericks",
                "Memphis Grizzlies",
                "Portland Trail Blazers",
                "New Orleans Pelicans",
                "Sacramento Kings",
                "San Antonio Spurs",
                "Phoenix Suns",
                "Minnesota Timberwolves",
                "Golden State Warriors"
            ]
        },
        {
            type: "checkbox",
            name: 'bestTeam',
            title: "Which team is the best in the East",
            colCount: 3,
            isRequired: true,
            choicesOrder: "asc",
            choices:[
                "Milwaukee Bucks",
                "Toronto Raptors",
                "Boston Celtics",
                "Miami Heat",
                "Indiana Pacers",
                "Philadelphia 76ers",
                "Brooklyn Nets",
                "Orlando Magic",
                "Washington Wizards",
                "Charlotte Hornets",
                "Chicago Bulls",
                "New York Knicks",
                "Detroit Pistons",
                "Atlanta Hawks",
                "Cleveland Cavaliers"
            ]
        }
      ]
    };
    var surveyRender = !this.state.isCompleted ? (
      <Survey.Survey
        json={json}
        showCompletedPage={false}
        onComplete={this.onCompleteComponent}
      />
    ) : null;
    var onCompleteComponent = this.state.isCompleted ? (
      <div><h1>Thank you for submitting your choice</h1></div>
    ) : null;
    return (
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
                <div>
                    {surveyRender}
                    {onCompleteComponent}
                </div>
            </div>
    );
  }
}

export default SurveyComponent;