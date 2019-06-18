import React, { useContext, } from "react";
import { Card, } from "semantic-ui-react";
import { AuthContext, } from "../providers/AuthProvider";


const Profile = () => {

  const {name, nickname, email, dateJoined } = useContext(AuthContext)

  return(
  <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Header>{nickname}</Card.Header>
      <Card.Meta>
        Date Joined:{dateJoined }
      </Card.Meta>
    </Card.Content>
    <Card.Content>
      <p>{email}</p>
    </Card.Content>
  </Card>
  ) 
}

export default Profile;