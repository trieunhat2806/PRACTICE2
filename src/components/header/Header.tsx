import React from "react";
import myImg from "../images/12.jpg";
import myImg1 from "../images/13.jpg";

const Header =()=>{
    return(
        <div>
        <h4>WELCOME TO OUR REACT TYPESCRIPT COURSE</h4>
         <img src={myImg} alt=""/>
         <img src={myImg1} alt=""/>
    </div> 
       
    );
}

export default Header;