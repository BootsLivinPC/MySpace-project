import React, {useState, useContext, useEffect } from 'react';
import { Header, Card, Image, Icon, Button, Grid } from 'semantic-ui-react';
import axios from 'axios'
import { AuthContext, } from "../providers/AuthProvider";
import Post from "./Post"

const Home = () => {
  const {user,} = useContext(AuthContext)
  const [people, setPeople] = useState([])


  useEffect( () => {
    axios.get("/api/people")
    .then( res => setPeople(res.data))
  }, [])

  
   const sample = () => {
     if (people.length) {
       const index = Math.floor(Math.random() * people.length)
       return people[index]
      } else {
        return null
      }
   }
  
   const downVote = (id) => {
    // const { cats, } = this.state;
    setPeople({ people: people.filter( c => c.id !== id ), });
  }
    const upVote = (id) => {
    // const { people, } = this.state;
    axios.put(`/api/people/${id}`)
      .then( () => setPeople({ people: people.filter( c => c.id !== id ), }) )
  }

  const renderPeople = () => {
    const person = sample()
    if (person) {
   return (
    <Card key={person.id}>
    <Image src={person.avatar} />
     <Card.Content>
       <Card.Header>{person.lastName} {}</Card.Header>
        <Card.Description>{ person.description}</Card.Description>
       <Card.Meta>{ person.job }</Card.Meta>
     </Card.Content>
      <Card.Content extra>
        <Button color='red' icon basic onClick={() => downVote(person.id)}>
         <Icon name="thumbs down" />
          </Button>
          <Button color='green' icon basic onClick={() => upVote(person.id)}>
          <Icon name="thumbs up" />
          </Button>
      </Card.Content>
    </Card>
     )
    }  else {
    return <Header textAlign="center">No More People</Header> }
  }
  
      return (
      <div>
       <Grid celled>
            <Grid.Row>
             <Grid.Column width={4}>
                <Image src='https://picsum.photos/200' />
                <Header>{user.nickname}'s Profile</Header>
             <hr/>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p></p>
               </Grid.Column>
               <Grid.Column width={12}>
            
              <Post/>
             </Grid.Column>
           </Grid.Row>
  
          <Grid.Row>
             <Grid.Column width={10}>
             <Header>UrSpace News Field</Header>
             <hr/>
              
             </Grid.Column>
            <Grid.Column width={6}>
            <Header>Know These Robots?</Header>
            <hr/>
             {renderPeople()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
    )
   }
  
  
export default Home;