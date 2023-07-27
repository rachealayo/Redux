import React,{useState} from "react";
import {Link} from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";
import {AiOutlineSearch} from "react-icons/ai"
import { BsPerson, BsCart } from "react-icons/bs"
import { useSelector } from 'react-redux';


const Header = () => {

    // state for Toggle function
    const [click, setclick] = useState(false)

    // function for Toggle
    const handClick = () => {
    setclick (!click)
 }

 const totalCart = useSelector(state => state.cart)

    return(
        <div className="Header-Contain">
                <div className="Header-Contain-Wrapper1">
                        <div className= "Logo">
                                <h1 >DigiStore</h1>
                        </div>
                        <div className="Search-hold">
                                <input type="search"  placeholder="Search for products"/>
                                <button style={{outline: 0, border: "1px solid gray"}}   type="submit" className="Search-icon">
                                        <AiOutlineSearch style={{width: 20, height: 20, color: "gray"}} />
                                </button>
                        </div>
                        <div className="Customer-Info">
                                <div className="Left"><BsPerson  style={{width: 25, height: 25, color: "gray"}}/></div>
                                <button className="Mid">
                                        <p>Hello, Sign in</p>
                                        <p>my Account</p>
                                </button>
                                <div className="Right">
                                        <div className="Cart-Icon"><BsCart style={{width: 25, height: 25, color: "gray"}}/></div>
                                        <div className="Cart">
                                                <p>My Cart</p>
                                                <p>$0</p>
                                        </div>
                                </div>

                        </div>
                </div >

                <div className= "Header-Contain-Wrapper2">
                        < div className="navs">
                                <Link to="/"  className='Link'><li>HOME</li></Link>
                                <Link to="/about"  className='Link'><li>ABOUT</li></Link>
                                <Link to="/product"  className='Link'><li>PRODUCT</li></Link>
                                <Link to='/cart' className='Link'><li>MY CART {totalCart.length}</li></Link> 
                        </div> 
                </div>

                <div className="Icon" onClick={handClick}>
                        {click ? <FaTimes/> : (<FaBars/>)}  
                </div>
                {click ? (
                        <div className="Dropnavs" >
                                <li>HOME</li>
                                <li>ABOUT</li>
                                <li>PRODUCT</li>
                                <li>MY CART</li>
                        </div>
                ) :  null}     
        </div>
        
    )
}

export default Header;