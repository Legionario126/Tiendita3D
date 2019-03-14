import React from 'react'
import { Link } from 'react-router-dom'

function drawFooter() {
  
    return (
      <div>
        <footer className="page-footer red darken-4">
          <div className="container">
            <div className="row">

              <div className="col l6 s12">
                <h5 className="white-text">Iniciativa</h5>
                <p className="grey-text text-lighten-4">
                  La idea surge a raiz de la implementación de nuevas estrategias de ventas y la incormporación de una nueva carrera que busca abrirce paso en un mundo donde no hay mucho campo de trabajo fuera de lo ya conocido. 
                </p>
              </div>

              <div className="col l3 s12">
                <h5 className="white-text">Apps usadas</h5>
                <ul>
                  <li><Link to="http://pixologic.com/" target="_blank" rel="noopener noreferrer" className="grey-text text-lighten-3">Pixologic : ZBrush</Link></li>
                  <li><Link to="https://www.marvelousdesigner.com/" target="_blank" rel="noopener noreferrer" className="grey-text text-lighten-3">Marvelous Designer</Link></li>
                  <li><Link to="https://marmoset.co/toolbag/" target="_blank" rel="noopener noreferrer" className="grey-text text-lighten-3">Marmoset Toolbag</Link></li>
                  <li><Link to="https://www.artstation.com/" target="_blank" rel="noopener noreferrer" className="grey-text text-lighten-3" >ArtStation</Link></li>
                </ul>
              </div>

              <div className="col l3 s12">
                <h5 className="white-text">Contenido</h5>
                <ul>
                  <li><Link to="/login" className="grey-text text-lighten-3">Login</Link></li>
                  <li><Link to="/signup" className="grey-text text-lighten-3">Signup</Link></li>
                  <li><Link to="/gallery" className="grey-text text-lighten-3">Gallery</Link></li>
                </ul>
              </div>

            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              © 2019 Copyright Tiendita3D
            </div>
          </div>
        </footer>
      </div>
    )
  }
  
  export default drawFooter







