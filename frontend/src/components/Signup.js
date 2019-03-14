import React from 'react'
import axios from 'axios'
import { Row, Input, Icon } from 'react-materialize'
import { Link } from 'react-router-dom'

class Signup extends React.Component {

    state = {
        newUser: {},
        errors: {}
    }

    handleChange = e => {
        let { newUser, errors } = this.state
        newUser[e.target.name] = e.target.value
        //validate
        errors = {}
        if (newUser.password !== newUser.password2) errors.password = "no coinciden"
        this.setState({ newUser, errors })
    }

    sendToServer = () => {
        let { newUser } = this.state
        let url = "https://tiendita3d.herokuapp.com/signup"
        axios.post(url, newUser)
            .then(res => {
                console.log("Nuevo usuario ? ", res)
                this.props.history.push('/login')
            })
            .catch(e => console.log(e))
    }

    render() {
        const { errors } = this.state
        return (
            <div className="fotoProblema2">
              <section className="container">
                <Row>
                  <Input onChange={this.handleChange} s={6} label="Username" name="username" type="text"><Icon>account_circle</Icon></Input>
                  <Input onChange={this.handleChange} s={6} label="E-mail" name="email" type="text"><Icon>email</Icon></Input>
                  <Input onChange={this.handleChange} s={6} label="Password" name="password" type="password"><Icon>fingerprint</Icon></Input>
                  <Input onChange={this.handleChange} s={6} label="Password2" name="password2" type="password"><Icon>fingerprint</Icon></Input>
                  <p style={{ color: "red" }}>{errors.password}</p>
                </Row>
                {/* <div className="container">
                  <input onChange={this.handleChange} placeholder="username" name="username" type="text" />
                  <br />
                  <input onChange={this.handleChange} placeholder="email" name="email" type="text" />
                  <br />
                  <input onChange={this.handleChange} placeholder="password" name="password" type="password" />
                  <br />
                  <input onChange={this.handleChange} placeholder="password2" name="password2" type="password" />
                  <p style={{ color: "red" }}>{errors.password}</p>
                </div> */}
              </section>
              <section className="center">
                <button className="btn waves-effect waves-light" onClick={this.sendToServer}>Registrarse<i className="material-icons right ">send</i></button>
                <p>
                    Ya tienes una cuenta?
                    <Link to="/login" > Login</Link>
                </p>
              </section>

              {/* <div  className="fotoProblema">
                <img src="https://thecraftymuslimah.files.wordpress.com/2014/06/shop_window_woman_mannequin_003_3d_model_fbx_obj_max__b162ccfb-5a46-4e21-8939-caca2b116b56.jpg" alt="" />
              </div> */}

            </div>
        )
    }
}

export default Signup