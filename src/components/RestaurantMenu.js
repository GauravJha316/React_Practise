//     "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId="
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useEffect, useState } from 'react'
import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null)


    const {resId} = useParams();

    const resInfo=useRestaurantMenu(resId)


// const fetchMenu = async () => {
//   const data = await fetch(
//     `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=17.771678&lng=83.245248&restaurantId=${resId}`
//   );

//   const json = await data.json();
//   setResInfo(json.data);
//   console.log("123")
// };


    if(resInfo === null) return <Shimmer/>
    const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
    // const itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name
    // console.log(itemCards)
    // console.log(resInfo)
    const {itemCards} =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card || [];
    console.log(itemCards)
  return (
    
  
    <div>
        <h1>{name}</h1>
        <h2>{cuisines?.join(", ")}</h2>
        <h2>{costForTwoMessage}</h2>
    <ul>
        {itemCards?.map((item)=>
        <li key={item.card.info.id}>
            {item.card.info.name}-{" Rs. "} 
           { item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}
        {/* <li>{itemCards[0]?.card?.info?.name}</li> */}

    </ul>
    </div>  
  )
}

export default RestaurantMenu;

    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu=async()=>{
        // const data=await fetch(`https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=17.771678&lng=83.245248&restaurantId=${resId}`);
        // const data=await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=17.771678&lng=83.245248&restaurantId=+"+resId);
        // const data=await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=17.771678&lng=83.245248&restaurantId="+resId);
        // const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=17.771678&lng=83.245248&restaurantId=766502");
    //     const json=await data.json();
    //     console.log('data pree');
    //     console.log(json);
    //     setResInfo(json.data)
    // }
