import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import People from './components/People'
import ProfileForm from './components/ProfileForm'
import MyFriends from './components/MyFriends'


const App = () => (
  <Fragment>
    <NavBar />
    <FetchUser>
     <Container>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/my_friends" component={MyFriends} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/people" component={People} />
        <Route exact path="/person/new" component={ProfileForm} />

        <Route component={NoMatch} />
      </Switch>
     </Container>
    </FetchUser>
  </Fragment>
)

export default App;
