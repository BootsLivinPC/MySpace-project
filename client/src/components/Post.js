import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { List, Segment, Button, Icon } from "semantic-ui-react"
import PostForm from "./PostForm"
import {AuthContext, } from "../providers/AuthProvider"


const Post = () => {
const [posts, setPosts] = useState([])
const [showForm, setShowForm] = useState(false)
const {user, } = useContext(AuthContext)

useEffect( () => {
  axios.get(`/api/user/${user.id}/posts`)
  .then( res => {
    setPosts(res.data)}
    )
},[user.id])

 const destroyPost = (post_id) => {
   axios.delete(`/api/user/${user.id}/posts/${post_id}`)
   .then( res => {
    setPosts(posts.filter(p => {
      if (p.id !== post_id) {
        return p  
      }
      else {
    
      }
        })
      )
    })
  }   
 
  const renderPosts = () => {
    return posts.map( post => (
    <Segment key={post.id}>
      <Button 
      color='red' 
      icon 
      floated="right" 
      basic 
      onClick={() => destroyPost(post.id)}
      >
      <Icon name='trash'/>
      </Button>
      <List.Header as="h4">{post.title}: </List.Header>
      <List.Description>
        "{ post.body }"
      </List.Description>
     {/* <List.Meta>{post.created_at}</List.Meta> */}
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
      { renderPosts() }
    </List>
      </>
    )
  
}

export default Post