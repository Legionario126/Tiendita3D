import React, { Component } from 'react';
import { getProducts } from '../services/products'
import { Row, Input, Icon } from 'react-materialize'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Gallery extends Component {

  state = {
    products: [],
    product: {},
    pictureProduct: {} 
  }

  componentDidMount() {
    getProducts()
      .then(products => {
        this.setState({ products })
      })
      .catch(e => {
        alert("Lo senctimos de momento no hay productos")
      })

  }

  onChange = e => {
    let { product } = this.state
    product[e.target.name] = e.target.value
    console.log(product)
    this.setState({ product })
  }

  // onClick = () => {
  //   let { product, products } = this.state

  //   postProduct(product)
  //     .then(res => {
  //       console.log(res)
  //       this.setState({ products: [...products, res.product ] })
  //     }).catch(err => {
  //       console.log(err)
  //     })
      
  // }
  
  handleImageChange = e => {
    let { pictureProduct } = this.state
		pictureProduct = e.target.files[0] 
		this.setState({pictureProduct})
  }
  
  sendToServer = e => {
		e.preventDefault()
		let url= "https://tiendita3d.herokuapp.com/gallery"
    let {pictureProduct, product} = this.state 
    const formData = new FormData()
    const keys = Object.keys(product)
    console.log(keys)
    for(let x of keys) {
      console.log(x)
      formData.append(x, product[x])
      console.log(x, product[x])
    } 		
    formData.append("picture", pictureProduct)
    console.log(formData)
		let serviceUpload = axios.create({url, withCredentials: true})
		return serviceUpload.post(url, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			}
		})
			.then(res => {
				this.props.history.push('/gallery')
				console.log(res)
			})
			.catch(e => console.log(e))
  }
  
  render() {
    // let { products } = this.state 
    // let {_id} ="none"
    return (
      <div className="container">
        <section className="center">
          <div className="container">
            <Row>
              <Input onChange={this.onChange} s={6} label="Nombre del producto" name="name" type="text"><Icon>create</Icon></Input>
              <Input onChange={this.onChange} s={6} label="Precio" name="price" type="text"><Icon>monetization_on</Icon></Input>
              <Input onChange={this.handleImageChange} s={12} label="Foto producto" name="pictureGallery" type="file"></Input>
              <Input onChange={this.onChange} s={12} label="3D Viewer" name="pic3D" type="text"><Icon>code</Icon></Input>
              <Input onChange={this.onChange} s={12} label="Descripción" name="des" type="text"><Icon>text_fields</Icon></Input>
            </Row>
            <button className="btn waves-effect waves-light" onClick={this.sendToServer}>Subir producto <i className="material-icons right ">file_upload</i></button>

          </div>
        </section>
        {/* {products.map(pro => <p key={pro._id}> {pro.name}</p>)} */}

        {/* productos en cartitas */}
          <div className="row">
            <div className="col 12">
              <div className="section">
                {this.state.products.map((pro,i) => {
                  return (
                    <div key={i} className="col m4 s12">
                      <div className="card hoverable">
                        <div className="card-image">
                          <img className="materialboxed" src={pro.pictureGallery[0]} alt="" />
                          <Link to={"/detail/"+pro._id} className="btn-floating halfway-fab waves-effect waves-light black"><i className="material-icons">details</i></Link>
                          <span className="card-title">{pro.name}</span>
                        </div>
                        <div className="card-content">
                          <p>Descripcion: {pro.des}</p>
                          <p>Precio: $ {pro.price}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Gallery;