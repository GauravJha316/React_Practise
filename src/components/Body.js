import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockData.js"
import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
// import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import onlineStatus from "../utils/useOnlineStatus.js";
const Body=()=>{
  //local state variable superpower variable
  const[listOfRestaurants,setListOfRestaurants]=useState([]);

const [searchText, setSearchText]=useState("")
const [filteredRestaurant, setFilteredRestaurant]=useState([]);
  useEffect (()=>{
    fetchData();
  }, []);

  const fetchData = async() =>{
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=17.771678&lng=83.245248&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json()
    console.log(json)
    setListOfRestaurants( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(listOfRestaurants)
    setFilteredRestaurant( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const onlineStatus=useOnlineStatus();

if (onlineStatus === false) {
   return (
      <h1>Looks like you're offline. Please check your internet connection.</h1>
   );
}
  // if(listOfRestaurants.length ===0){
  //   return <Shimmer/>
  // }
  return listOfRestaurants.length ===0 ? <Shimmer/> :(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button onClick={()=>{
          console.log(searchText)
          const filteredRestaurant= listOfRestaurants.filter((res)=>res.info.name.toLowerCase()===searchText.toLowerCase());

          setFilteredRestaurant(filteredRestaurant)
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
          const filteredList=listOfRestaurants.filter(
            (res)=>res.info.avgRating >4.5
          );
          setListOfRestaurants(filteredList)
        }}>Top Rated Restaurants</button>
          {/* <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.5
            );

            setListOfRestaurants(filteredList);
          }}
        ></button> */}
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant)=>(
         <Link  key={restaurant.info.id}  to={"/restaurants/"+restaurant.info.id}> <RestaurantCard
          resData={restaurant} /> </Link>
        ))}
        {/* {
          resList.map((restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          )
          )
        } */}
      </div>
    </div>
  ) 
}

export default Body;