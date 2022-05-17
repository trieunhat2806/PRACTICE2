import React from "react";
import './menu.css'


const Menu =()=>{
            return (
            <div className="App">
                                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <form className="form-inline">
            <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">@</span>
            </div>
            <input type="text" className="form-control" placeholder="Username" />
            <input type="text" className="form-control" placeholder="Password" />
            <button>submit</button>
            </div>    
        </form>
        </nav> 
                        <ul>
                <li><a href="default.asp">Kiwi</a></li>
                <li><a href="news.asp">Cherry</a></li>
                <li><a href="contact.asp">Pineaple</a></li>
                <li><a href="about.asp">Watermelon</a></li>
</ul>     
        </div>
        
        );
}

export default Menu;