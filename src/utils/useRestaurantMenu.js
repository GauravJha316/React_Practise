import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async()=>{
        const data= await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=17.771678&lng=83.245248&restaurantId=${resId}`)

        const json= await data.json();
        setResInfo(json.data);

    }

    return resInfo;
}

export default useRestaurantMenu;