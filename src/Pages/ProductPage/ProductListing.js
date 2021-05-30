import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import  './ProductListing.css';

import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../FrontPage/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="row mt-5 product-con">
      <h2>Products</h2>
     
      <div className="col-lg-12 col-md-12 mb-5">
      <ProductComponent />

      </div>
    </div>
  );
};

export default ProductListing;
