
import React,{ useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./shimmer";


const Body = () => {

    const [ListofRestaurants, setListOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {

     try {
       const data = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
       );
 
       const json = await data.json();
 
     console.log("all",json.data)
                  
     setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
     } catch (error) {
      console.log("error",error)
     }
    }
    
    // conditional rendering
    if(ListofRestaurants.length === 0){
      return <Shimmer />

    }

   

     return (
     <Restaurant Data={ListofRestaurants}/>
     );
    
  };

  export default Body;