import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.logout = this.props.logout;
    this.state = this.props.currentUser;
  }
  render(){
    if(this.state){
      return (
        <div>
          <h2>Greetings, {this.state.username}!</h2>
          <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </div>
      )
    }
    return (
      <div>
        <Link to={'/signup'}>Signup</Link>
        <br />
        <Link to={'/login'}>Login</Link>
      </div>
    );
  }
}

export default Greeting;
