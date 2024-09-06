import { useEffect, useState } from "react"
import { MENU_URL } from "../utils/consonents";



const useRestaurantMenu = (resId) => {


    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async() =>{
        try{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
        }catch(error){
            console.error("fail to fetch", error);
        }
    }



    return resInfo
}
export default useRestaurantMenu;