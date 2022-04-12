import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import "./style.css";
import LowestPrice from "../../../images/lowest-price.png";
import { useSelector, useDispatch } from "react-redux";
import baby from "../../../images/category/baby.png";
import {
  incrementProductCount,
  decrementProductCount,
  decrementValueZero
} from "../../../redux/action/Action";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const cartItem = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();

  const { setOpen, open } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const incrementCount = (productID) => {
    dispatch(incrementProductCount(productID));
  };

  const decrementCount = (productID) => {
    dispatch(decrementProductCount(productID));
    dispatch(decrementValueZero(productID))
  };

  const count = () => {
    if (Object.values(cartItem).length) {
      let total = 0;
      Object.values(cartItem).forEach((item) => {
        total = total + item.count;
      });

      return total;
    } else {
      return 0;
    }
  };

  return (
    <div>
      <Dialog
        className="dialog"
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              My Cart ({count()})
            </Typography>

            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {Object.values(cartItem).length ? (
          Object.values(cartItem).map((x) => {
            return (
              <div className="cart-product">
                <img width={"100"} height="100" src={x.productImage} alt="baby" />
                <div>
                  <div className="product-name">{x.productName}</div>
                  <div className="style-botton">
                    <button
                      className="btn-style"
                      onClick={() => decrementCount(x.id)}
                    >
                      -
                    </button>
                    {x.count}
                    <button
                      className="btn-style"
                      onClick={() => incrementCount(x.id)}
                    >
                      +
                    </button>
                    <span>x</span>
                    Rs.
                    {x.productPrice}
                    <div>{x.productPrice * x.count}</div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-cart">
            <hi className="heading">No items in your cart</hi>
            <span>Your favourite item are just click away </span>
          </div>
        )}
        <div className="lowest-price">
          <img src={LowestPrice} alt="images"></img>
          <span className="single-text">
            You won't find it cheaper anywhere
          </span>
        </div>
        {Object.values(cartItem).length ? (
          <div className="btn-color">
            <Button variant="contained">Proceed to Checkout</Button>
          </div>
        ) : (
          <div className="btn-color">
            <Button variant="contained">Start Shopping</Button>
          </div>
        )}
      </Dialog>
    </div>
  );
}
