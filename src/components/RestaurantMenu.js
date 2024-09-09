
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {    

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);   

    if(resInfo === null) return <Shimmer />  

  const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  console.log("BBB",itemCards);

    return (
        <div className="bg-gray-100">  

                
            <h1 className="font-bold">{name}</h1>            
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2 className="font-bold">Menu</h2>          
            
            <ul>
                {itemCards.map((item) => (<li key={item.card.info.id}>{item.card.info.name} - {"Rs "}{item.card.info.price/100}</li>))}                               
            </ul>       

        </div>
    )
}

export default RestaurantMenu;