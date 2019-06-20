import React from 'react'
import axios from  'axios'
import { Form, Container, Button} from 'semantic-ui-react'



class ProfileForm extends React.Component {
  state = { firstName: '', lastName: '', email: '', nickName: '', hobbies: '', }

  componentDidMount() {
const { match: {params: {id, } } } = this.props

if (id)
axios.get(`/api/people/${id}`)
.then(res => {
  const {firstName, lastName, email, nickName, hobbies} = res.data
  this.setState({ firstName, lastName, email, nickName, hobbies })
})
.catch(err => {
  console.log(err.response)
})
  }

  handleChange = (e) => {
    const { target: { name, value } } = e
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const person = { ...this.state }
    const { match: { params: { id } }, history: { push } } = this.props
    if (id) {
      axios.put(`/api/people/${id}`, person)
        .then(res => push(`/people/${id}`))
    } else {
      axios.post(`/api/people`, person)
        .then(res => push(`/people/${res.data.id}`))
    }
  }

   render() {
     const { firstName, lastName, email, nickName, hobbies } = this.state
     return (
       <Container style={{marginTop: "100px"}}>
       <Form onSubmit={this.handleSubmit}>
       <Form.Input
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={this.handleChange}
            required
          />
       <Form.Input
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.handleChange}
            required
          />
       <Form.Input
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
            required
          />
       <Form.Input
            name="nickName"
            placeholder="Nickname"
            value={nickName}
            onChange={this.handleChange}
            required
          />
       <Form.Input
            name="hobbies"
            placeholder="Hobbies"
            value={hobbies}
            onChange={this.handleChange}
            required
          />
          <Button color='green' inverted >Submit</Button>
       </Form>
       </Container>
     )
   }
}

export default ProfileForm