
import React,{ useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./shimmer";
import RestaurantCard, { withPromotion } from "./RestaurantCard";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Body = () => {

    const [ListofRestaurants, setListOfRestaurants] = useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromotion = withPromotion(RestaurantCard);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {

     try {
       const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
       );
      // there is a website called corsproxy.io which helps to  get data from another domain withouut cors extension
       const json = await data.json();
 
    //console.log("all",json)
    //console.log("cards",ListofRestaurants);
                  
     setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    
     } catch (error) {
      console.log("error",error)
     }
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)return <h1>Looks like ypu are Offline !!!</h1>

    const {loggedInUser, setUserName} = useContext(UserContext)
    
    // conditional rendering
   return ListofRestaurants.length === 0 ? (
    <Shimmer />
   ) : (

    <div className="body">
      <div className="filter">
     
        <div className="search m-4 mb-0 p-4">
        <h1 className="font-bold text-xl">Restaurents</h1>
          <input 
          type="text"
          data-testid="searchInput"
          placeholder="search"
          className="border border-solid border-black rounded-lg px-2"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value)
          }}
          />

          <button className="px-4 bg-green-100 m-4 rounded-lg"
          onClick={()=>{
           // console.log(searchText);
            const filteredRestaurant = ListofRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filteredRestaurant);
          }}
          >Search</button>

          <button className="px-4 py-1 bg-gray-100 rounded-lg"
          onClick={()=>{
           // console.log("hii")
            const filteredRestaurant = ListofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
      setFilteredRestaurant(filteredRestaurant)
          }}
          >Top rated</button>
          
          <label className="m-2">UserName :</label>
          <input type="text"
           placeholder="Set userName"
           className="border border-solid border-black rounded-lg px-2"
           value={loggedInUser}
           onChange={(e) => setUserName(e.target.value)} />
          

        </div>

        
     <div className="flex flex-wrap">
      {filteredRestaurant.length > 0 ? (
        filteredRestaurant.map((restaurant, index) => (
          <div key={index}>
       <Link to={"/restaurants/"+restaurant.info.id}>
       {restaurant.info.avgRating > 4.4 ? (
        <RestaurantCardPromotion resData={restaurant}/>
       ):(
        <RestaurantCard resData={restaurant}/>
        )} </Link>
          </div>
        ))
      ) : (
        <p>No restaurants available</p>
      )}
      </div>
       
      </div>
    </div>

   )    
    
  };

  export default Body;