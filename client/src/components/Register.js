import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class Register extends React.Component {
  state = { name: '', nickname: '', email: '', image: '', password: '', passwordConfirmation: '', };
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, nickname, email, image, password, passwordConfirmation } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister({ name, nickname, email, image, password, passwordConfirmation, }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
   
    this.setState({ [name]: value, });
  }
  
  render() {
    const { name, nickname, email, image, password, passwordConfirmation, } = this.state;
    
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            required
            autoFocus
            name='name'
            value={name}
            placeholder='Name'
            onChange={this.handleChange}
          />
          <Form.Input
            label="nickname"
            required
            name='nickname'
            value={nickname}
            placeholder='nickname'
            onChange={this.handleChange}
          />
          {/* <Form.Select
            label="image"
            // required
            name='image'
            value={image}
            placeholder='image'
            onChange={this.handleChange}
            options
          /> */}
          <Form.Input
            label="Email"
            required
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}