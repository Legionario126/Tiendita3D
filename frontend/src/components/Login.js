import React from 'react'
import axios from 'axios'
import { Row, Input, Icon } from 'react-materialize'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  
  state = {
    auth: {}
  }

  handleChange = e => {
    let { auth } = this.state
    auth[e.target.name] = e.target.value
      this.setState({ auth })
  }

  sendToServer = (e) => {
    e.preventDefault()
    let { auth } = this.state
    let url = "https://tiendita3d.herokuapp.com/login"
    console.log("si llegue hasta aqui")
    axios.post(url, auth, { withCredentials: true })
      .then(res => {
        console.log(res)
        this.props.history.push('/gallery')
      })
      .catch(e => {
        alert("La contraseña y/o usuarios son incorrectos. " + e )
      })
  }

  render() {
    return (
      <div className="fotoProblema">
        <section>
          <div className="container">
            <Row>
              <Input onChange={this.handleChange} s={6} label="E-Mail" name="email" type="text"><Icon>account_circle</Icon></Input>
              <Input onChange={this.handleChange} s={6} label="Password" name="password" type="password"><Icon>fingerprint</Icon></Input>
            </Row>
          </div>
        </section>

        <section>
          <div className="center">
          <button className="btn waves-effect waves-light" onClick={this.sendToServer}>Login<i className="material-icons right ">send</i></button>
            <p> ¿Aún no tienes cuenta? <Link to="/signup" > Regístrate</Link></p>
          </div>
        </section>

      </div>
    )
  }
}

export default Login