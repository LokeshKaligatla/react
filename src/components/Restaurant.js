import React from "react"
import RestaurantCard from "./RestaurantCard"
const Restaurant=({Data})=>{

    console.log("Data",Data)

    return(
     <>
      <div className="search">
    <h1>Restaurants</h1> 
    <div className="search-body">
    <input type="text" className="search-box" value={searchText} />
    <button>Search</button>
  </div>
  </div> 
        
     
     <div className="ress-body">
      {Data && Data.length > 0 ? (
        Data.map((restaurant, index) => (
          <div key={index}>
        <RestaurantCard resData={restaurant}/>
          </div>
        ))
      ) : (
        <p>No restaurants available</p>
      )}
      </div>
      
     </>
    )
}





export default Restaurant