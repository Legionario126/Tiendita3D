import React from 'react';
import axios from 'axios'
// import { getProducts } from '../services/products'
import M from "materialize-css"; 
// import { Carousel } from 'react-materialize'
import { Link } from 'react-router-dom'


class Detail extends React.Component {

  state = {
    products: [],
    product: {},
    pictureGallery: []
  }

  componentDidMount() {
    M.AutoInit();
    // let {product} = this.state 
    let {id} = this.props.match.params
    axios.get(`https://tiendita3d.herokuapp.com/detail/${id}`)
      .then(pro => {
        this.setState({product: pro})
      })
  }

  // componentDidMount() {
  //   M.AutoInit();
  //   const { id } = this.props.match.params
  //   axios.get(getProducts + id)
  //     .then(response => {
  //       this.setState({ product: response.data })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }


  render() {
    const  {product}  =this.state
    console.log(product)
    if(!product.data) return <div>Loading</div>
    return(
      <div>
        <section className="row">
            <div className="col s12 m6">
              <div className="card hoverable">
                <div className="card-image">
                {/* <Carousel options={{ fullWidth: true }} images={[
                  '{product.data.pictureGallery[0]}',
                  '{product.data.pictureGallery[1]}',
                  '{product.data.pictureGallery[2]}',
                  '{product.data.pictureGallery[3]}',
                ]} /> */}
                  <img src={product.data.pictureGallery[0]} alt={product.data.name} />
                  <span className="card-title">{product.data.name}</span>
                  <Link to="#!icon" className="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">shopping_cart</i></Link>
                </div>
                <div className="card-content">
                  <p>{product.data.des}</p>
                  <p>Precio: ${product.data.price}</p>
                </div>
              </div>
            </div>
          
            <div className="col s12 m6">
              <div className="card hoverable">
                <div className="card-image">
                  <iframe title={product.data.name} width="640" height="360" src={product.data.pic3D} frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" scrolling="no"> </iframe>
                  <span className="card-title">Modelo 3D</span>
                  <Link to="#!icon" className="btn-floating halfway-fab waves-effect waves-light red tooltipped" data-position="top" data-tooltip="Gallery"><i className="material-icons">photo_size_select_large</i></Link>
                </div>
                <div className="card-content">
                  <h5>Controles:</h5>
                  <p>- Click y drag para rotar el modelo</p>
                  <p>- Scroll hacer zoom</p>
                  <p>- Preciona la ruda del mouse para hacer paneos</p>
                </div>
              </div>
            </div>
        </section>
      </div>
    )
    // return <Character product={product.data} />

  
    
  }
}

export default Detail