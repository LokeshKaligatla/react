import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/consonents";
import { useState } from "react";

const Header = () => {

  const [btnName, setbtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnName==="Login" ? setbtnName("Logout") : setbtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;