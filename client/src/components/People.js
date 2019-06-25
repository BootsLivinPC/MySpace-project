import React from 'react'
import {Card, Container, Header, Button, Icon, Grid, Image, } from "semantic-ui-react"
import axios from 'axios';
import { Link, } from 'react-router-dom'
import StyledCard from "../styles/StyledCard"
import ButtonStyle from "../styles/ButtonStyle"
import Page from '../styles/Page'
import CardGroup from '../styles/CardGroup'


class People extends React.Component {
  state = { people: [], }

  componentDidMount() {
    axios.get("/api/people")
    .then( res => {
      this.setState({ people: res.data, })
    })
    .catch( err => {
      console.log(err.response)
    })
  }

showPeople = () => {
  const { people, } = this.state
  if (people.length <= 0)
  return <h2>No People</h2>
  return (
    <Card.Group itemsPerRow={4}>
      { people.map( person =>
        <Card key={person.id}>
          <Image src={person.avatar} />
          <Card.Content>
            <Card.Header>
              { person.lastName }
            </Card.Header>
           <Card.Description>{person.description}</Card.Description>
           <hr/>
           <Card.Meta>{person.job}</Card.Meta>
          </Card.Content>
        </Card>
      )}
    </Card.Group>
  )
  }
   
  
render() {
  return (
    <Page>
      <Container>
        <ButtonStyle>
          <Link to="/person/new">
          <Button 
          inverted color='green'>
           <Icon name="add" />
           Create
          </Button>
          </Link>
        </ButtonStyle>
        <Grid>
          <Grid.Row>
            <Grid.Column columns={4}>
              <CardGroup>
                {this.showPeople()}
              </CardGroup>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Page>
  )
}

}

export default People