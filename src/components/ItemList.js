import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/consonents";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {

        dispatch(addItem(item));

    }

   // console.log("xyz",items)
    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
                    
                     <div className="ml-3 w-9/12">
                    <div className="py-2">                        
                        <span className="font-bold">{item?.card?.info?.name || "Unknown"}</span>
                        <span>{" "}-₹{" "}{item?.card?.info?.price/100 || "N/A"}</span>
                    </div>
                    <p>{item?.card?.info?.description || "No description Avalible"}</p>
                </div>
                <div className="w-3/12">
                    <div className="absolute">
                    <button className="p-2 bg-black text-white shadow-lg m-auto rounded-lg"
                    onClick={() => handleAddItem(item)}>Add+</button>
                    </div>
                    <img src={CDN_URL + item?.card?.info?.imageId} className="w-full rounded-lg" alt={item?.card?.info?.name} />

                </div>
                </div>

             
                
                
            ))}
        </div>
    )
}
export default ItemList;