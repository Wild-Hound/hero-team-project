import React from "react";
import Contact from "../Contact/Contact";
import ProductDetails from "../ProductPage/ProductDetails";
import styles from "./FrontPage.module.scss";

function FrontPage() {
  return <div className={styles.PageWrapper}>Edited</div>;

  return (
    <div className="row d-flex align-items-center">
      <ProductDetails></ProductDetails>
      <Contact></Contact>
    </div>
    // <div className={styles.PageWrapper}>Develop Front</div>;
  );
}

export default FrontPage;
