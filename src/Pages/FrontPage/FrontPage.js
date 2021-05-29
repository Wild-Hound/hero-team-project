import React from "react";
import Contact from "../Contact/Contact";
import styles from "./FrontPage.module.scss";


function FrontPage() {
  
  return (
    <div className= "row d-flex align-items-center">
        {/* <div className="col-md-4 offset-md-1">
          <div className="header-container">
            <p style={{color: 'white'}}> WE PROMISE TO BUILD</p>
           <h1 style={{color: 'white'}}> THE NEW <br/> FUTURE OF <br/> ARCHITECTURE</h1>
           <p className="text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quas optio voluptate ad voluptas deleniti eos accusamus possimus autem aut praesentium fugiat voluptates laborum, deserunt corrupti. Aut enim facere animi optio eligendi voluptas minima nisi tempora, tempore ex fugiat in labore quos. Nihil eius veniam totam voluptatibus sed, voluptatem alias?</p>
           <button className="btn btn-secondary"> LEARN MORE</button>
           </div>
        </div> */}
        <Contact></Contact>
    </div>
     
    
    // <div className={styles.PageWrapper}>Develop Front</div>;
  )
  
  
}

export default FrontPage;
