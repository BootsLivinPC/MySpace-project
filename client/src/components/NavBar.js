import React, {useContext, } from 'react'
import { AuthContext, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

const Navbar = ({ location, history}) => {
  const {user, handleLogout, } = useContext(AuthContext)

  const rightNavItems = () => {
    
    if (user) {
      return (
        <Menu.Menu position='right'>
        <Menu.Item>
          {user.email}
        </Menu.Item>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={location.pathname === '/'}
            />
          </Link>
          <Link to='/people'>
            <Menu.Item
              name='people'
              id='people'
              active={location.pathname === '/people'}
            />
          </Link>
          <Link to='/my_friends'>
            <Menu.Item
              name='friends'
              id='friends'
              active={location.pathname === '/my_friends'}
            />
          </Link>
            { rightNavItems() }
        </Menu>
      </div>
    )
  }


// export class ConnectedNavbar extends React.Component {
//   render() {
//     return (
//       <AuthConsumer> 
//         { auth => 
//           <Navbar { ...this.props } auth={auth} />
//         }
//       </AuthConsumer>
//     )
//   }
// }

export default withRouter(Navbar);