import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router";

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    // ...
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    const errors = this.props.errors.isArray ? this.props.errors.map(e => <li>{e.message}</li>) : this.props.errors.message;
    const linkto = this.props.formType === 'login' ? 'signup' : 'login';
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type='text'
              value={this.state.username}
              onChange={this.update('username')}
              />
          </label>
          <label>Password:
            <input type='password'
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
        <ul>{errors}</ul>
        <Link to={'/' + linkto}>{linkto}</Link>
      </div>
    );
  }

}
export default withRouter(SessionForm);
