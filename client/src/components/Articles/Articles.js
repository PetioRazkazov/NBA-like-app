import React from 'react';
import './Articles.css';
import { Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
class Articles extends React.Component{

    constructor(props) {
        super(props);
        this.state = {role: '',texts: [],email : '', article: '',count:0};
        this.setEmail = this.setEmail.bind(this);
        this.setArticle = this.setArticle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
       componentDidMount(){
           let tokens = localStorage.getItem('tokens');
           let isUser = tokens.substr(15,4);
           if(isUser == 'user'){
               this.setState({role:'user'});
           }        
      }
      setEmail(event) {
        this.setState({email: event.target.value});
      }
      setArticle(event){
          this.setState({article: event.target.value});
      }
      handleSubmit(event){
         event.preventDefault();
         const text = this.state.article;
         this.setState({texts: this.state.texts.concat(this.state.article)});
         axios.post('http://localhost:5000/articles/add',{text: text}).then(res =>console.log(res.data));
         this.setState({count: this.state.count + 1});
      }
    render(){
            let isUser = this.state.role;
            const renderUser = ()=>{
        if(isUser == 'user'){
                let currentComponent = this;
                axios.get('http://localhost:5000/articles').then(res => currentComponent.setState({texts : res.data}));
                let num = this.state.texts.length;
                for(let i = 0; i < num; ++i){
                return <div>
                        {this.state.texts.map(item => (<React.Fragment key ={item.id}>
                            <dt className = 'headerStyle'>{item.text}</dt>
                        </React.Fragment>))}
                    </div>
                }
        } else{
            return <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" value={this.state.email} onChange={this.setEmail} placeholder="Enter email"/>
            </Form.Group>

            <Form.Group controlId="formBasicArticle">
                <Form.Label>Article</Form.Label>
                <Form.Control as="textarea" value={this.state.article} onChange={this.setArticle} rows="7" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick = {this.handleSubmit}>
                Submit
            </Button>
        </Form>
        }
        }
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
                {renderUser()}
            </div>
        );
    }
}

export default Articles;