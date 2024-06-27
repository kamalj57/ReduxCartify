import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import {Link} from'react-router-dom'

const Cart = () => {
  const cartitems=useSelector((state)=>state.cart.items)
  return (
    <div className="grid sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 pl-5 pr-5">
      { cartitems.length > 0 ?
        cartitems.map((element,key)=>(
         <CartItem key={key} products={element}/>
        )) 
        :
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-1/3">
            <h2 className="text-lg font-bold">Missing Cart Items</h2>
            <p className="mt-2 text-md">
             You didn't add any products to the cart yet now
            </p>
            <div className="mt-4 flex gap-2">
              <Link
                to="/products"
                className="rounded bg-green-100 px-4 py-2  font-semibold text-green-600"

              >
               Add Products
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart
