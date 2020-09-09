import React from 'react';
import { Grid, Form, Segment, Button, Header, Message, Icon, GridColumn } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  _handleChange = event => {
    this.setState ({ [event.target.name]: event.target.value });
  }

  _handleSubmit = event => {
    event.preventDefault();
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(createdUser => {
      console.log(createdUser);
    })
    .catch(err => {
      console.error(err);
    })
  }

  render () {
    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <GridColumn style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            Register for AppChat
          </Header>
          <Form size="large" onSubmit={this._handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                icon="user"
                type="text"
                iconPosition="left"
                placeholder="Username"
                onChange={this._handleChange}
                value={username}
              />
              <Form.Input
                fluid
                name="email"
                icon="mail"
                type="email"
                iconPosition="left"
                placeholder="Email Address"
                onChange={this._handleChange}
                value={email}
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                type="password"
                iconPosition="left"
                placeholder="Password"
                onChange={this._handleChange}
                value={password}
              />
              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                type="password"
                iconPosition="left"
                placeholder="Password Confirmation"
                onChange={this._handleChange}
                value={passwordConfirmation}
              />
              <Button color="orange" fluid size="large">Submit</Button>
            </Segment>
          </Form>
          <Message>Already a user? <Link to="/login">Login</Link></Message>
        </GridColumn>
      </Grid>
    );
  }
};

export default Register;
