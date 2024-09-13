import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/consonents";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus()

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  //console.log("items", cartItems);

    return (
      <div className="flex justify-between sm:bg-green-200 shadow-lg m-2 lg:bg-yellow-100 rounded-lg">
        <div className="w-[120px]">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="p-2"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex m-5 p-5">
            <li className="px-4">onlineStatus : {onlineStatus ? "✅":"⛔"}</li>
            <li className="px-4"><Link to ="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About Us</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
            <button className="px-4" onClick={()=>{
              btnName==="Login" ? setbtnName("Logout") : setbtnName("Login");
            }}>{btnName}</button>
             <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;