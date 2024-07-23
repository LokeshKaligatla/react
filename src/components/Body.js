import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    const [ListofRestaurants, setListofRestauranrs] = useState(resList);

    return (
      <div className="body">
        <div className="search-container">
          <input type="text" placeholder="Search Food or Restaurant" />
          <button className="filter" onClick={ () => {
           const filteredList = ListofRestaurants.filter(
                (res) => res.data.avgRating > 4
            );
            setListofRestauranrs(filteredList)
            console.log(filteredList);
          }}>Search</button>
        </div>
        <div className="res-container">
         
          {ListofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
  
         </div>
      </div>
    );
  };

  export default Body;