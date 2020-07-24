import React from 'react';
import axios from 'axios';
import './Register.css';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: '',password: ''};
    
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleUsername(event) {
        this.setState({value: event.target.value});
      }
      handlePassword(event){
          this.setState({password: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault();

        const user = {
            username: this.state.value,
            password: this.state.password
        }
        axios.post('http://localhost:5000/users/add',user).then(res =>console.log(res.data));
        window.location = '/';
      }

    render(){
        return(
            <div className = 'mainContainer'>
                <div className = 'header'>
                    <span className = 'register'>Account Registration</span>
                </div>
                <div className = 'subHeader'>
                    <p className = 'loginTitle'>Register</p>
                </div>
                <form onSubmit={this.handleSubmit} className= 'inputForm'>
                    <input type="text" className='inputUsername' value={this.state.value} onChange={this.handleUsername} placeholder='Username'/>
                    <input type="password" className='inputPassword' value={this.state.password} onChange={this.handlePassword} placeholder='Password'/>
                    <input type="submit" value="Submit" className= 'button'/>
                </form>
            </div>
        );
    }
}

export default Register;