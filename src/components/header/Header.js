import React from "react";
import "./style.css";
import cartimage from "../../images/logo_2x.png";
import cart from "../../images/cart.svg";
import { Link } from "react-router-dom";
import Shopping from "./shoppingCart/ShoppingCart"
import {Grid} from "@mui/material"
import { useSelector } from 'react-redux';


const Header = () => {
  const cartItem = useSelector(state => state.cartItem)
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const count = () => {
    if(Object.values(cartItem).length){
      let total = 0 ;
      Object.values(cartItem).forEach(item => {
       total = total + item.count
      })
      
      return total
    }else {
      return 0;
    }
  }

  
  
  return (

    <header className="header">
      {console.log("cartItem",cartItem)}
      <div className="wrapper">
      <Grid container >
       <Grid item md = "2" >
       <img className="img-cart" src={cartimage} alt="logo" />
       </Grid>
       <Grid item md = "4" >
       <ul>
            <li>
              <Link to = "/">Home</Link>
              <Link to = "/product">Products</Link>
            </li>
          </ul>
       </Grid>
       <Grid item md = "6" >
         <div className="right-navigation">
         <div className="sign-in">
            <Link to = "login" className="font-style">Signin</Link>
            <Link to = "signup">Register</Link>
          </div>
          <div className="cart-items">
            {/* <Link to = "cart"> */}
            <img className="shopp-cart" src={cart} alt="images" onClick = {handleClickOpen} />
            <span onClick = {handleClickOpen} > {count()} items</span>
            {/* </Link> */}
            
          </div>
         </div>
       
         
       </Grid>
    </Grid>
      </div>
      <Shopping open = {open} setOpen = {setOpen}/>
    </header>
  );
};

export default Header;
