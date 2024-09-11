
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import Rescategory from "./Rescategory";
import { useState } from "react";

const RestaurantMenu = () => {    

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);   

    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <Shimmer />  

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  console.log("BBB",itemCards);
  console.log("ccc",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("DD",categories);

    return (
        <div className="text-center">  

                
            <h1 className="font-bold my-6 text-2xl">{name}</h1>            
            <p className="my-4 font-bold">{cuisines.join(",")} - {costForTwoMessage}</p>

            {/**categerores */}
            {categories.map((category, index) => (
                <Rescategory key={category?.card?.card?.title} data={category?.card?.card}
                 showItems={index===showIndex ? true : false}
                 setShowIndex ={() => setShowIndex(index)}/>
            ))}
               

        </div>
    )
}

export default RestaurantMenu;