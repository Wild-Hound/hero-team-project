import React, { useState } from "react";
import styles from "./ProductPage.module.scss";
import './ProductPage.css'
import { Link ,useHistory} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductPage() {
  let history=useHistory();

let handleCart=()=>{
  toast.success('Great! Ordered Successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
 setTimeout(() => {
   history.push("/")
 }, 3000);

}

  return (
  <div    className="row  container productDetail">
    <div className="row  detail ">
       <div className=" img-sec col-md-6 col-lg-5 col-sm-12">
     <div className="back"><Link to="/" className="backto"><ArrowBackIosIcon /> BACK TO HOME</Link></div>

     <img className="img-flu" src="/img/pic.jpg" alt="product"  />

</div>
{/* img sec end */}
{/* info section start */}
       <div className=" info-sec col-md-7 col-lg-7 col-sm-12">
           <p className="detail-title"> WD 2TB Elements Portable External Hard Drive - USB 3.0 </p>
           
          <div className="description-star"><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/><StarOutlineIcon /> 
   </div>  
          
         <p className="description-text"> USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance 
           High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems;
            Compatibility may vary depending on user’s hardware configuration and operating system
            </p>    
<span className="category" >Category<ArrowRightAltIcon /></span>  <span className="category-name"> Electronics</span> 
           
           <p className="description-price"><sup >$</sup>627</p>
             
      <button onClick={handleCart} className="addToCart"><ShoppingCartIcon/> Add to cart </button>

       </div>
{/* info section end */}
    </div>
    <ToastContainer />
  </div>
  )
}

export default ProductPage;
