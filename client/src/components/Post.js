import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { List, Segment, Button, } from "semantic-ui-react"
import PostForm from "./PostForm"


const Post = () => {
const [posts, setPosts] = useState([])
const [showForm, setShowForm] = useState(false)

useEffect( () => {
  axios.get("/api/posts")
  .then( res => setPosts(res.data))
}, [])

  const renderPosts = () => {
    return posts.map( post => (
    <Segment key={post.id}>
      <List.Header as="h4">{post.title}</List.Header>
      <List.Description>
        { post.body }
      </List.Description>
    </Segment>
    ))
    
  }

  
    return (
      <>
      { showForm && 
      <PostForm 
      toggleForm={setShowForm}
      add={(post) => setPosts([ ...posts, post, ])} /> 
    }
    <Button onClick={() => setShowForm(!showForm)}>
    { showForm ? "Hide Form" : "New Post"}
    </Button>
    <List>
      {renderPosts()}
    </List>
      </>
    )
  
}

export default Post