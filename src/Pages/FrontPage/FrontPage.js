import React from "react";
import styles from "./FrontPage.module.scss";
import {Link} from "react-router-dom";
function FrontPage() {
  return <div className={styles.PageWrapper}>
    Develop Front Page Here<br></br>
  
    <Link to="/product">Product  Details</Link> 
  
  
  
  </div>;
}

export default FrontPage;
