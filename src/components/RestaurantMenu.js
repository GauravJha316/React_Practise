//     "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=22.56430&lng=88.36930&restaurantId="
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useEffect, useState } from 'react'
import React from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';
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
    console.log( "data", resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    const categories=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log("categoreis:",  categories)
  return (
    
  
    <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className='font-bold text-lg'>{cuisines?.join(", ")}</p>
        <p  className='font-bold text-lg'>{costForTwoMessage}</p>
        
        {categories.map((category)=> <RestaurantCategory data={category?.card?.card}/>)}


    {/* <ul>
        {itemCards?.map((item)=>
        <li key={item.card.info.id}>
            {item.card.info.name}-{" Rs. "} 
           { item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}
     

    </ul> */}
    </div>  
  )
}
//    {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
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
