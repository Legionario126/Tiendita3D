import React from 'react'
import axios from 'axios'
const url = "https://tiendita3d.herokuapp.com/imageProfile" 
const serviceUpload  = axios.create({url, withCredentials: true})


class Profile extends React.Component {
    state = {
        privateInfo: {},
        authorized: false,
        profilePic: {},
        respo: {}
    }

    componentDidMount() {
        this.getPrivateData()
    }


    getPrivateData = () => {
        let url = "https://tiendita3d.herokuapp.com/private"
        axios.get(url, { withCredentials: true })
            .then(res => {
                
                this.setState({ privateInfo: res.data, authorized: true })
            })
            .catch(e => {
                console.log(e)
                this.props.history.push('/login')
            })
    }

    handleChange = (e) => {
        this.setState({profilePic: e.target.files[0]})
    }

    handleSubmit = () => {
        const { privateInfo } = this.state
        this.subeImagen(this.state.profilePic, url)
            .then(res => {
                privateInfo.profilePic = res.profilePic
                this.setState({ privateInfo })
            })
    }

    editProfile =() =>{
      
    }

    subeImagen = (file, url) => {
        const formData = new FormData()
        formData.append('picture', file)
        return serviceUpload.post(url, formData, {headers: {
            'Content-Type': 'multipart/form-data',
          },})
          .then( (res) => res.data )
          .catch( e => console.log(e))
        }
    

    render() {
        let { privateInfo } = this.state
        console.log(privateInfo)
        if(this.state.authorized) {
            return(
                <div className="section">
                  {/* <section>
                    <label >Deseas cambiar tu foto de perfil</label>
                    <input type="file" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Vamos pues!</button>
                  </section> */}

                    <section className="nidet">
                      <div className="col s12 m7">
                        <h2 className="header">{privateInfo.name}</h2>
                        <div className="card horizontal">

                          <div className="card-image">
                            <img className="materialboxed" width='300' src={privateInfo.profilePic} alt="" />
                          </div>
                                             
                          <div className="card-stacked">
                            
                            <div className="card-content">
                              <h4>Correo electronico: {privateInfo.email}</h4>
                              <h5><p>Miembro desde: {privateInfo.createdAt}</p></h5>
                              <h5><p>Favoritos: {privateInfo.products}</p></h5>
                              {/* <p>{{interests}}</p> */}
                            </div>

                          </div>
                        </div>
                      </div>
                    </section>

                </div>
            )
        }else {
            return (
                <div className="section">
                    <h1>Home</h1>
                    <p>Loggeate primero bro</p>
                </div>
            )
        }
    }
}

export default Profile