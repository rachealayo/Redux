import React, {useEffect} from "react";
import './index.css'
import axios from "axios"
import { useDispatch } from 'react-redux';
import { add } from '../Store/cartSlice';


const  Product = () =>  {

        // state to capture our data
        const [products, setProducts] = React.useState([]) 

        const dispatch = useDispatch()

        const addToCart = (product) => {
            dispatch(add(product))
        }
        
        const getProducts = () =>{
                axios.get("https://fakestoreapi.com/products")
                // axios.get("https://api.bestbuy.com/click/5592e2b895800000/12345678/pdp")
                .then ((response) =>{
                        setProducts(response.data)
                }).catch((err) => {
                        console.log(err)
                    })
        }
        console.log(products)

        useEffect(() => {
                getProducts()
        }, [])


  return (
        <div className="Container-app">
                <marquee className="Moving-text">My Shopping App</marquee>
                <div className="Wrapper-app">
                 {products.map (product  => (
                        <div className="Item-card"  key={product.id}>
                                <div className="Top">< img  className="Image-hold"  src= {product.image} alt=" "/></div>
                                
                                <div className="Bottom">
                                        <div className="Text-hold">
                                                <div>
                                                        <div>{product.title}</div>
                                                        <img src= {product.image}  alt=" " className="productimg"/>
                                                        <div>{product.price}</div>
                                                </div>
                                        </div>
                                        <div className="Btn-primary">
                                                <button className="Cart-btn"  onClick={() =>{addToCart(product)}}>Add To Cart</button>
                                        </div>
                                </div>
                        </div>
                        ))
                 }
                </div>
        </div>
        

  );
}


export default  Product;