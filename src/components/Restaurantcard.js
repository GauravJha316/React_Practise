import { CDN_URL } from "../utils/constants"
const RestaurantCard =(props) =>{
  const {resData}=props

  const{cloudinaryImageId,name,avgRating,cuisines,deliveryTime}=resData?.info
  return(
    <div className="res-card">
   <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        {/* <h5>{resData?.info?.costForTwo/100}</h5> */}
        <h4>{deliveryTime}</h4>
{/* gaurav jha k bet hai kal clone krege or ep-8 khtam krege raat mein call krgege
 */}
    </div>
  )
}
export default RestaurantCard;