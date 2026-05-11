// const ItemList=({items})=>{
//     return <div>
//         {items.map((item)=>(
//             <div key={item.card.info.id}>
//                 <div>
//                     <span>{item.card.info.name}</span>
//                      <span>{item.card.info.price}</span>
//                 </div>
//                  <p>{item.card.info.description}</p>
//             </div>
//         ))}
//     </div>

// }
// export default ItemList;
import {CDN_URL} from "../utils/constants"
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice"
const ItemList=({items})=>{
    const dispatch = useDispatch();
    const  handleAddItem =(item)=>{
        dispatch(addItem(item))
        console.log("obj",item)
    }
    return <div className="mt-4">
        {items.map((item)=>(
            <div 
                key={item.card.info.id}
                className="p-6 mb-5 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-[1.01]"
            >
                <div className="flex justify-between items-start">
    
    <div className="w-9/12">
        <span className="text-xl font-bold text-gray-800 tracking-wide">
            {item.card.info.name}
        </span>

        <p className="text-lg font-extrabold text-green-600">
            ₹{(item.card.info.price || item.card.info.defaultPrice)/100}
        </p>

        <p className="text-gray-500 text-sm leading-6 mt-4">
            {item.card.info.description}
        </p>
    </div>

    <div className="w-3/12 flex justify-end">
        <img
            src={CDN_URL + item.card.info.imageId}
            className="w-28 h-24 object-cover rounded-xl shadow-md"
        />
        <button className="p-2 bg-white shadow-lg absolute m-auto" onClick={()=> handleAddItem(item)}>Add +</button>
    </div>

</div>
            </div>
        ))}
    </div>

}
export default ItemList;