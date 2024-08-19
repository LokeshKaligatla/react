import { CDN_URL } from "../utils/consonents";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    if (!resData || !resData.info) {
      
      return null; 
    }
    const {
      name,
      
      cuisines,
      avgRating,
      costForTwo,      
    } = resData?.info;
    
  
    return (
     <div
     className="res-card"
     style={{backgroungColor: '#f0f0f0'}}
     >
        
        <img 
        className="res-logo"
        src={CDN_URL+resData.info.cloudinaryImageId}
        alt={"Image-not-loding"}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo } FOR TWO</h4>
        
      </div>
    );
  };

  export default RestaurantCard;