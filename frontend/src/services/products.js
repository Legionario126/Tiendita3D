import axios from 'axios'

let url = "https://tiendita3d.herokuapp.com/gallery"

// get all
export const getProducts = () => axios.get(url).then(res => res.data)

//subir un producto 
export const postProduct = (product)  => {
    return axios.post(url, product, {withCredentials: true})
        .then(res => res.data)
        .catch(err => err)
}