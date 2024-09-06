
import React,{ useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";


const Body = () => {

    const [ListofRestaurants, setListOfRestaurants] = useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText, setSearchText] = useState("");

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
 
    console.log("all",json)
                  
     setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    
     } catch (error) {
      console.log("error",error)
     }
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)return <h1>Looks like ypu are Offline !!!</h1>
    
    // conditional rendering
   return ListofRestaurants.length === 0 ? (
    <Shimmer />
   ) : (

    <div className="body">
      <div className="filter">
      <h1>Restaurents</h1>
        <div className="search">
          
          <input 
          type="text"
          placeholder="search"
          className="search-Box"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value)
          }}
          />

          <button
          onClick={()=>{
            console.log(searchText);
            const filteredRestaurant = ListofRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filteredRestaurant);
          }}
          >Search</button>

          <button className="filter"
          onClick={()=>{
            console.log("hii")
            const filteredRestaurant = ListofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
      setFilteredRestaurant(filteredRestaurant)
          }}
          >Top rated</button>

        </div>

        
     <div className="ress-body">
      {filteredRestaurant.length > 0 ? (
        filteredRestaurant.map((restaurant, index) => (
          <div key={index}>
       <Link to={"/restaurants/"+restaurant.info.id}> <RestaurantCard resData={restaurant}/> </Link>
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