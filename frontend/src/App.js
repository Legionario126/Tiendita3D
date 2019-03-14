import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import axios from 'axios'
import {Button, SideNavItem, SideNav, Navbar, NavItem } from 'react-materialize'
import M from "materialize-css"; 
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


class App extends Component {
  state = {
    privateInfo: {},
    authorized: false,
    profilePic: {},
    respo: {}
  }

  componentDidMount() {
      this.getPrivateData()
      M.AutoInit();
  }

  getPrivateData = () => {
      let url = "https://tiendita3d.herokuapp.com/private"
      axios.get(url, { withCredentials: true })
          .then(res => {
              //console.log(res)
              this.setState({ privateInfo: res.data, authorized: true })
          })
          .catch(e => {
              console.log(e)
              this.props.history.push('/login')
          })
  }

  render() {
    let { privateInfo } = this.state
    // console.log(privateInfo)
      if(this.state.authorized) {
        return(
          <div>
            <Navbar brand='Tiendita 3D' left className="red darken-4 z-depth-5" >
                  <NavItem>
                    <SideNav 
                      trigger={<Button className="black botonProblema"><i className="material-icons">dehaze</i></Button>}
                      options={{ closeOnClick: true }}
                      >
                      <SideNavItem userView
                        user={{
                          background: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/E6LxqQ1ixikssn79z/red-smoke-on-black-background_belb_jrja_thumbnail-full01.png',
                          image: 'http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png',
                          name: privateInfo.name,
                          email: 'example@email.com',
                        }}
                      />  
                      <Link to="/"><SideNavItem icon='home'>Home</SideNavItem></Link>
                      <Link to="/gallery"><SideNavItem icon='collections'>Gallery</SideNavItem></Link>
                      <SideNavItem divider />
                      <SideNavItem subheader>Options</SideNavItem>
                      <Link to='/profile'><SideNavItem icon='person'>Profile</SideNavItem></Link>
                      <SideNavItem onClick={() => {
                        axios.get("https://tiendita3d.herokuapp.com/logout", { withCredentials: true })
                          .then(res => {
                            console.log(res)
                            this.props.history.push('/profile')
                          })
                        }} ><i className="material-icons">exit_to_app</i>
                          Logout
                      </SideNavItem>
                    </SideNav>
                  </NavItem>
                  <NavItem divider />
                  <Link to='/'><NavItem icon='home'>Home</NavItem></Link>
                  <NavItem divider />
                  <Link to='/profile'><NavItem icon='person'>Profile</NavItem></Link>
                  <Link to="/gallery"><SideNavItem>Gallery</SideNavItem></Link>
                  {/* <NavItem><button className="btn" onClick={() => history.goBack()}>Go back</button></NavItem> */}
                </Navbar>
                <div className="fixed-action-btn">
                  <div>
                    <Link to='#!icon' className="btn-floating btn-large pink black"><i className="large material-icons">apps</i></Link>
                  </div>
                  <div>
                    <ul>
                      <li><Link to="/" className="btn-floating btn tooltipped waves-effect waves-light red darken-4"  data-position="left" data-tooltip="Logout"><i className="material-icons">exit_to_app</i></Link></li>
                      {/* <li><Link to="javascript:history.back(-1)" className="btn-floating btn tooltipped waves-effect waves-light black"data-position="left" data-tooltip="Return"><i className="material-icons">reply</i></Link></li> */}
                      <li><Link to="/gallery" className="btn-floating btn tooltipped waves-effect waves-light red darken-4" data-position="left" data-tooltip="Gallery"><i className="material-icons">photo_library</i></Link></li>
                      <li><Link to="/profile" className="btn-floating btn tooltipped waves-effect waves-light black"data-position="left" data-tooltip="Profile"><i className="material-icons">person</i></Link></li>
                      <li><Link to="/" className="btn-floating btn tooltipped waves-effect waves-light red darken-4" data-position="left" data-tooltip="Home"> <i className="material-icons">home</i></Link></li>                  
                    </ul>
                  </div>
                </div>
            <Routes />
          </div>
        )
      }else {
          return (
              <>
                <Navbar brand='Tiendita 3D' left className="red darken-4" >
                  <Link to="/"><NavItem icon='home'>Home</NavItem></Link>
                  <Link to="/gallery"><NavItem icon='collections'>Gallery</NavItem></Link>
                  <Link to="/login"><NavItem>Login</NavItem></Link>
                  <Link to="/signup"><NavItem>Signup</NavItem></Link>
                </Navbar>

                <Routes />
              </>
          )
      }
  }
}

export default withRouter(App);