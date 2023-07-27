import React, {useEffect} from 'react'
import axios from "axios"
import {AiOutlineDelete} from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { remove } from '../Store/cartSlice';
// import { useSelector } from 'react-redux'

const Cart = () => {
    
      //   const product = useSelector(state => state.cart)

        const [products, setProducts] = React.useState([]) 

        const getProducts = () =>{
            axios.get("https://fakestoreapi.com/products")
            
            
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

        const dispatch = useDispatch()

        const removeFromCart = (product) => {
            dispatch(remove(product))
        }

  return (
      <div className='cartHold'>
            {/* {JSON.stringify(product)} */}

            <div className='cartHoldWrapper'>
                  {products.map(product =>(
                              < div   className='LeftCartHold'   key={product.id}>
                                    <div className='LeftCart'>
                                          <div className='LeftCartWrap'>
                                                <div className='LeftCartTop' >
                                                      <div className='LeftCart1'>
                                                            <div> <img className='ImageHold'  src={product.image} alt= ""/></div>
                                                            <div>{product.title}</div>
                                                      </div>
                                                      <div className='LeftCart2'>{product.price}</div>
                                                </div>
                                                <button className='LeftCartBottom' onClick={() =>{removeFromCart(product)}}>
                                                      <AiOutlineDelete style={{width: 20, height: 20}}/>
                                                      <h3>REMOVE</h3>
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        ))
                  }
                  <div className='RightCart'>
                         <div className='RightCartWrapper'>
                                <div><h3>CART SUMMARY</h3></div>
                                     <div className='subtotal'>
                                           <div>SubTotal</div>
                                           <div>Price</div>
                                     </div>
                               <button className='checkout'>CHECK OUT</button>
                         </div>
                  </div>
            </div>
      </div>
  );
}

export default Cart;