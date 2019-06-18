import React from 'react'
import axios from  'axios'
import { Form, Container, Button} from 'semantic-ui-react'



class PersonForm extends React.Component {
  state = { firstName: '', lastName: '', email: '', nickName: '', }

  componentDidMount() {
const { match: {params: {id, } } } = this.props

if (id)
axios.get(`/api/people/${id}`)
.then(res => {
  debugger
  const {firstName, lastName, email, nickName } = res.data
  this.setState({ firstName, lastName, email, nickName })
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
        .then(res => push(`/person/${id}`))
    } else {
      axios.post(`/api/people`, person)
        .then(res => push(`/people/${res.data.id}`))
        debugger
    }
  }

   render() {
     const { firstName, lastName, email, nickName, } = this.state
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
            placeholder="NickName"
            value={nickName}
            onChange={this.handleChange}
            required
          />
          <Button color='green' inverted >Submit</Button>
       </Form>
       </Container>
     )
   }
}

export default PersonForm