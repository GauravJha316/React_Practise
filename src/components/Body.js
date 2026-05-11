import RestaurantCard, {withPromotedLabel} from "./Restaurantcard";
import resList from "../utils/mockData.js"
import { useState, useEffect, useContext  } from "react";
import { Link } from "react-router-dom";
// import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import onlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
const Body=()=>{
  //local state variable superpower variable
  const[listOfRestaurants,setListOfRestaurants]=useState([]);

const [searchText, setSearchText]=useState("")

const RestaurantCardPromoted=withPromotedLabel(RestaurantCard)
const [filteredRestaurant, setFilteredRestaurant]=useState([]);
  useEffect (()=>{
    fetchData();
  }, []);

  console.log("Body Render",listOfRestaurants)

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

const {loggedInUser,setUserName}= useContext(UserContext);

  // if(listOfRestaurants.length ===0){
  //   return <Shimmer/>
  // }
  return listOfRestaurants.length ===0 ? <Shimmer/> :(
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="border borser-solid border-black" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>

          <button className="px-4 py-2 bg-green-100 m-4" onClick={()=>{
          console.log(searchText)
          const filteredRestaurant= listOfRestaurants.filter((res)=>res.info.name.toLowerCase()===searchText.toLowerCase());

          setFilteredRestaurant(filteredRestaurant)
          }}>Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button 
        className="px-4 py-2 bg-gray-100 rounded-lg"
         onClick={()=>{
          const filteredList=listOfRestaurants.filter(
            (res)=>res.info.avgRating >4.5
          );
          setListOfRestaurants(filteredList)
        }}>Top Rated Restaurants</button>
        </div>
        <div >
          <label>UserName :</label>
          <input className="border border-black" 
          value={loggedInUser}
          onChange={(e)=>setUserName(e.target.value)}/>
        </div>
        
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
    <div className="flex flex-wrap">
  {filteredRestaurant.map((restaurant) => (
    <Link
      key={restaurant.info.id}
      to={"/restaurants/" + restaurant.info.id}
    >
      {restaurant.info?.avgRating > 4.5 ? (
        <RestaurantCardPromoted resData={restaurant} />
      ) : (
        <RestaurantCard resData={restaurant} />
      )}
    </Link>
  ))}
</div>

    </div>
  ) ;
};

export default Body;

        {/* {
          resList.map((restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          )
          )
        } */}