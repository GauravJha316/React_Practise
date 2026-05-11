import {useDispatch, useSelector} from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {

    const cartItems= useSelector((store)=> store.cart.items)
    console.log(cartItems);

    const dispatch=useDispatch();

    const handleClearCart =()=>{
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear cart</button>
            {cartItems.length===0 && <h1>Please add menu to cart. Your cart is empty</h1>}
            <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;

// import { useSelector } from "react-redux";
// import ItemList from "./ItemList";

// const Cart = () => {

//     const cartItems = useSelector((store) => store.cart.items);

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-yellow-50 py-10">

//             <div className="w-9/12 mx-auto bg-white shadow-2xl rounded-3xl p-8 border border-orange-200">

//                 {/* Heading */}
//                 <div className="flex justify-between items-center mb-8 border-b pb-5">

//                     <h1 className="text-5xl font-extrabold text-orange-500 tracking-wide drop-shadow-lg">
//                         🛒 Your Cart
//                     </h1>

//                     <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-lg font-bold shadow-lg">
//                         {cartItems.length} Items
//                     </span>

//                 </div>

//                 {/* Empty Cart */}
//                 {cartItems.length === 0 ? (
//                     <div className="py-20">
//                         <h2 className="text-3xl font-bold text-gray-400">
//                             Your Cart is Empty 😔
//                         </h2>

//                         <p className="text-gray-500 mt-3 text-lg">
//                             Add some delicious food items 🍕🍔
//                         </p>
//                     </div>
//                 ) : (
//                     <div className="space-y-6">
//                         <ItemList items={cartItems} />
//                     </div>
//                 )}

//             </div>
//         </div>
//     );
// };

// export default Cart;