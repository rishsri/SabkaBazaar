import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/action/Action";
import image from "../../images/products/baby/baby-dove.jpg"

const Product = () => {
  const dispatch = useDispatch();
  const [fetchData, setFetchData] = useState([]);
  const [fetchDataCategory, setFetchDataCategory] = useState([]);
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState("");

  const apiCalling = () => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((res) => setFetchData(res))
      .catch((error) => console.log(error));
  };

  const apiCallingCategory = () => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((res) => setFetchDataCategory(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    apiCalling();
    apiCallingCategory();
  }, []);

  const handleClick = (category) => {
    setCurrentSelectedCategory(category);
  };

  const handleBuyNow = (productInfo) => {
    dispatch(
      addToCart({
		id: productInfo.id,
        productName: productInfo.name,
        productImage: productInfo.imageURL,
        productPrice: productInfo.price,
		count: 1
      })
    );
  };

  return (
    <div class="fruits-view">
      <ul>
        <li class="left-sidebar">
          <ul>
            {fetchDataCategory &&
              fetchDataCategory.map((x) => {
                return (
                  <li>
                    <a href="#" onClick={() => handleClick(x.id)}>
                      {x.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </li>

        <li class="right-sidebar">
          <ul>
            {(currentSelectedCategory
              ? fetchData.filter((x) => {
                  return x.category === currentSelectedCategory;
                })
              : fetchData
            ).map((x) => {
              return (
                <li>
                  <div>
                    <h5>{x.name}</h5>
                    <div class="cart-txt">
                      <span class="flag-view"></span>
                      <span>
                        <img className="images-product" src={x.imageURL} alt="product_img" />
                        {/* <em class="product-info">product info</em> */}
                      </span>
                      <p class="product-txt">{x.description}</p>
                      <div class="price-view">
                        <em>MRP Rs- {x.price}</em>
                        <button onClick={() => handleBuyNow(x)}>Buy Now</button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Product;
