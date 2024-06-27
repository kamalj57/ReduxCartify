import { useDispatch } from "react-redux";
import { Star, ShoppingCart } from 'lucide-react';
import { itemsAdded } from "../reducers/cartSlice";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="border border-gray-300 h-auto rounded-md p-5 mb-5 mt-5 text-left shadow-md shadow-slate-400">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-md w-full h-40 overflow-hidden">
            <img src={products.image} alt="product image" className="object-contain w-full h-full transition duration-500 hover:scale-105 " />
          </div>
          <div className="mt-5 w-full">
          <div className='h-4 text-center'>
              <p className="font-bold text-lg text-black">{products.title}</p>
              </div>
              <div className='mt-10'>
              <p className="text-gray-500  line-clamp-3 h-12 overflow-hidden">
                {products.description}
              </p>
            </div>
            <p className="font-bold text-lg text-black mt-3">₹ {products.price}</p>
            <div className="flex gap-2 mt-2">
              <p className="flex items-center gap-1 border border-green-500 w-14 pl-1 rounded-sm bg-green-500 font-bold text-md text-slate-100">
                {products.rating.rate}
                <Star size={14} fill="white"/>
              </p>
              <p className="text-gray-400 font-bold text-lg">{products.rating.count} Ratings</p>
            </div>
          </div>
          <button
            onClick={() => dispatch(itemsAdded(products))}
            className="w-full h-10 bg-blue-500 flex mt-4 items-center justify-center gap-2 rounded-md shadow-md font-bold text-md text-slate-100 p-2"
          >
            <ShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
