import { Trash2, Plus, Minus, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  decrementedquantity,
  incrementedquantity,
  itemsDeleted,
} from "../reducers/cartSlice";
import { useState } from "react";

const CartItem = ({ products }) => {
  const dispatch = useDispatch();

  const handleIncrementQuantity = () => {
    dispatch(incrementedquantity(products.id));
  };

  const handleDecrementQuantity = () => {
    if (products.quantity > 1) {
      dispatch(decrementedquantity(products.id));
    } else {
      setOpen(true);
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [placeOrder, setPlaceOrder] = useState(false);
  const handleOpenOrder = () => setPlaceOrder(true);
  const handleCloseOrder = () => setPlaceOrder(false);

  const handleDelete = () => {
    dispatch(itemsDeleted(products.id));
    handleClose();
  };

  return (
    <>
      <div className="border border-gray-300 h-auto rounded-md p-5 mb-5 mt-5 text-left shadow-md shadow-slate-400">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-md w-full h-40 overflow-hidden">
            <img
              src={products.image}
              alt="product image"
              className="object-contain w-full h-full transition duration-500 hover:scale-105"
            />
          </div>
          <div className="mt-5 w-full">
            <div className="h-4 text-center">
              <p className="font-bold text-lg text-black">{products.title}</p>
            </div>
            <div className="mt-10">
              <p className="text-gray-500 line-clamp-3 h-12 overflow-hidden">
                {products.description}
              </p>
            </div>
            <p className="font-bold text-lg text-black mt-3">
              ₹ {products.price}
            </p>
            <div className="flex gap-2 mt-2">
              <p className="flex items-center gap-1 border border-green-500 w-14 pl-1 rounded-sm bg-green-500 font-bold text-md text-slate-100">
                {products.rating.rate}
                <Star size={14} fill="white" />
              </p>
              <p className="text-gray-400 font-bold text-lg">
                {products.rating.count} Ratings
              </p>
            </div>
            <div className="font-bold text-lg text-black mt-3 flex items-center gap-3">
              <Minus
                size={20}
                className="text-gray-700 cursor-pointer border m-1 border-gray-300 rounded-sm"
                onClick={handleDecrementQuantity}
              />
              <div className="border border-gray-300 w-10 text-center">
                {products.quantity}
              </div>
              <Plus
                size={20}
                className="text-gray-500 cursor-pointer border m-1 border-gray-300 rounded-sm"
                onClick={handleIncrementQuantity}
              />
            </div>
            <p className="font-bold text-lg text-black mt-3">
              Total Cost : ₹ {products.totalcost}
            </p>
            <div className="mt-5 flex flex-col gap-2 md:flex-row md:gap-10">
              <button
                className="flex gap-1 bg-red-500 h-12 items-center justify-center font-bold text-lg text-slate-100 rounded-sm md:w-44"
                onClick={handleOpen}
              >
                <Trash2 className="text-slate-50 cursor-pointer" />
                DELETE ITEM
              </button>
              <button
                className="flex gap-1 bg-orange-500 h-12 items-center justify-center font-bold text-lg text-slate-100 rounded-sm md:w-44"
                onClick={handleOpenOrder}
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl md:w-1/2 lg:w-96 sm:p-12 w-96">
            <h2 className="text-lg font-bold">Confirm Deletion</h2>
            <p className="mt-2 text-md">
              Are you sure you want to delete <b>{products.title}</b> from your
              cart?
            </p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="rounded bg-green-100 px-4 py-2  font-semibold text-green-600"
                onClick={handleDelete}
              >
                Yes, Delete
              </button>
              <button
                type="button"
                className="rounded bg-gray-200 px-4 py-2  font-semibold text-gray-600"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {placeOrder && (
        <section className="fixed inset-0 flex items-center justify-center z-50 bg-slate-100 bg-opacity-50">
          <div className="relative bg-white rounded-3xl p-8 text-center md:w-1/2 lg:w-96 shadow-2xl sm:p-12 w-96">
            <div className="absolute inset-0rounded-3xl"></div>
            <div className="relative z-10">
              <p className="text-md font-semibold uppercase tracking-widest text-pink-500">
                Your order has been placed
              </p>
              <h2 className="mt-6 text-3xl font-bold">
                Thanks for your purchase, we're getting it ready!
              </h2>
              <button
                className="mt-8 inline-block w-full rounded-full bg-pink-600 py-4 text-lg font-bold text-white shadow-xl"
                onClick={handleCloseOrder}
              >
                Track Order
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CartItem;
