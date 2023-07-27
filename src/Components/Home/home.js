import React from 'react'
import { BsCheck, BsCart, BsHeart, BsArrowDown } from "react-icons/bs"


function home() {
  return (
    <div className='Hero'>
       <div className='Wrapper'>
                <div className='LeftHero'>
                        <div className='LeftHero-Wrapper'>
                        <div className="LeftHero-Top">
                                <div className="LeftHero1">
                                   <h2><span>ELECTRIFY</span>  YOUR DAY</h2>
                                   <p>Shop for electronic products with us, guaranteed quality, <br/>fast delivery and arrived safety to the destination.</p>
                                </div>
                                <div className="LeftHero2" >
                                        <img src= "/jacket.png"  className='LeftHero2-img' alt=''/>
                                </div>
                        </div>
                        <div className="LeftHero-Bottom">
                                <div>PRODUCTS <BsArrowDown style={{color: "orange", fontWeight: "bold"}}/></div>
                                        <div className='Product-Card-Wrap' >
                                                <div className='Product-Card'>
                                                        <img src= "/jacket2.png"  alt='' className='product-card-img'/> 
                                                        <button className='Plus'>add to cart</button>
                                                </div>
                                        </div>
                        </div>

                        </div>
                </div>

                <div className='RightHero'>
                        <div className='RightHero-Wrapper'> 
                                <div className='Price'>
                                        <p style={{color: "blue", fontSize: 25 }}>$3</p>
                                        <div className='Qty'>1</div>
                                </div>
                                <button className='Add'>
                                        <BsCart style={{marginRight: 7, width: 20, height: 20}}/>
                                        Add to cart</button>
                                <div className='Opt'>
                                        <div className='Line'></div>
                                        <div className="Option">or</div>
                                        <div className='Line'></div>
                                </div>
                                <button className='Checkout'>
                                        <BsCheck style={{marginRight: 5, width: 20, height: 20}}/>
                                        Quick Checkout</button>
                                <div className='Like'>
                                       <div className='No-of-Likes'> 
                                                < BsHeart style={{color: "darkred",width: 15, height: 15 }}/>3 
                                       </div>
                                </div>
                        </div>
                </div>
       </div>
    </div>
  )
}

export default home