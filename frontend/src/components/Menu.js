import React, { Component } from 'react';
import M from "materialize-css";
import { Link } from 'react-router-dom'

class Menu extends Component {
  
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <div className="parallax-container center valign-wrapper fotoTop">
          <div className="container">
            <div className="row">
              <div className="col s12 white-text">
                <h2 className="red-text text-darken-4">Tiendita 3D</h2>
                <p className="black-text">Una tienda en linea con un toque diferente</p>
                <Link to='/signup' className="waves-effect waves-light btn-large black">Comienza ahora</Link>
              </div>
            </div>
          </div>
          
          <div>
            <img src="https://static.turbosquid.com/Preview/2018/02/04__17_34_12/01.jpg2E0E8ABB-CB3D-4FCB-8538-E06B894FB731Default.jpg" alt="" />
          </div>

        </div>

        <div className="container">
          <div className="row">
            <div className="col m4 s12">
              <div className="icon-block">
                <h2 className="center red-text text-darken-4">
                  <i className="material-icons">build</i>  
                </h2>
                <h5 className="center">Como funciona</h5>
                <p className="light">Todo comienza con un producto normal que puedes encontrar en cualquier tienda. posteriormente uno de nuestros modeladores 3D lo modela en Marvelous Designer con los partones originales (Para que se vea lo mas parecido al original)</p>
              </div>
              
            </div>
            <div className="col m4 s12">
              <div className="icon-block">
                <h2 className="center red-text text-darken-4">
                  <i className="material-icons">brush</i>  
                </h2>
                <h5 className="center">Segundo paso</h5>
                <p className="light">Ya que tenemos el modelo en Marvelous Designer se pasa el modelo a ZBrush en donde se agregan detalles y corrigen algunos errores que pueda tener.</p>
              </div> 
            </div>
            <div className="col m4 s12">
              <div className="icon-block">
                <h2 className="center red-text text-darken-4">
                  <i className="material-icons">cloud_upload</i>  
                </h2>
                <h5 className="center">Finalmente</h5>
                <p className="light">Se pasa el archivo a Marmoset Toolbag en donde se saca el render y el archivo 3D para subirlo a ArtStation de donde se saca el codigo para poderlo vizualizarlo en la pagina</p>
              </div> 
            </div>
          </div>
        </div>

        <div className="parallax-container center valign-wrapper">
          <div className="fotito">
            <img src="https://static.turbosquid.com/Preview/001153/164/NR/mannequin-dress-3D-model_0.jpg" alt="" />
          </div>
        </div>

        <div className="container center-align">
        <div className="section">
            <div className="row">
            <div className="col s12">
              <h4>Chaqueta de cuero</h4>
              <p className="light left-align">
                Aqui abajo podras encoontrar un ejemplo para que puedas ver como funciona el viwer 3D. Para comenzar solo hace falta precionar el boton de play y esperar un rato. Los controles son los siguientes: con click y drag podras rotar el modelo. Scroll haces zoom. Y precionar al ruda del mouse haces paneos.
              </p>
            </div>      
          </div>
          </div>
        </div>

        <div>
          <section className="container">
            <div className="center">  
            <iframe title="demo" width="1500" height="500" src="https://www.artstation.com/embed/8853848" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" scrolling="no"> </iframe>
            </div>
          </section>
        </div>
      
      </div>
    );
  }
}

export default Menu;