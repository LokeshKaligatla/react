import { CDN_URL } from "../utils/consonents";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    // if (!resData || !resData.info) {
      
    //   return null; 
    // }
    const {
      name,      
      cuisines,
      avgRating,
      costForTwo,
      sla,      
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

        <div className="res-card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo }</h4>
        <h4>{sla?.slaString}</h4>

        </div>
        
      </div>
    );
  };

  export default RestaurantCard;