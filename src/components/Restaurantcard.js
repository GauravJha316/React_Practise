import { CDN_URL } from "../utils/constants"
const RestaurantCard =(props) =>{
  const {resData}=props

  const{cloudinaryImageId,name,avgRating,cuisines,deliveryTime}=resData?.info
  return(
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-600">
   <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
        <h3 className="font-bold">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        {/* <h5>{resData?.info?.costForTwo/100}</h5> */}
        <h4>{deliveryTime}</h4>
{/* gaurav jha k bet hai kal clone krege or ep-8 khtam krege raat mein call krgege
 */}
    </div>
  )

}
export const withPromotedLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-b-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;