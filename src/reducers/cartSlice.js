import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    itemsAdded: (state, action) => {
      const addeditem = state.items.find((x) => x.id === action.payload.id);
      addeditem
        ? ((addeditem.quantity += 1),
          (addeditem.totalcost = addeditem.quantity * addeditem.price))
        : state.items.push({
            ...action.payload,
            quantity: 1,
            totalcost: action.payload.price,
          });
        toast.success(`You've successfully addedd the product ${action.payload.title} to the cart`,{
          position: "bottom-center",
          theme:"dark",
            autoClose: 1000,
        });
    },
    itemsDeleted: (state, action) => {
      const productToDelete = state.items.find((x) => x.id === action.payload);
      if (productToDelete) {
        toast.success(`You've successfully removed the product ${productToDelete.title} from the cart`,{
          position: "bottom-center",
          theme:"dark",
            autoClose: 1000,
        });
        state.items = state.items.filter((x) => x.id !== action.payload);
      }
    },
    
    incrementedquantity: (state, action) => {
      const foundeditem = state.items.find((x) => x.id === action.payload);
        foundeditem.quantity += 1;
        foundeditem.totalcost=foundeditem.quantity*foundeditem.price;
        toast.success(`You've changed the "${foundeditem.title}" Quantity to "${foundeditem.quantity}"`,{
          position: "bottom-center",
          theme:"dark",
            autoClose: 1000,
        });
        
    },
    decrementedquantity:(state,action)=>{
      const foundeditem = state.items.find((x) => x.id === action.payload);
      if(foundeditem.quantity > 1){
        foundeditem.quantity -= 1;
        foundeditem.totalcost=foundeditem.quantity*foundeditem.price;
        toast.success(`You've changed the "${foundeditem.title}" Quantity to "${foundeditem.quantity}"`,{
          position: "bottom-center",
          theme:"dark",
            autoClose: 1000,
        })
      }else{
        state.items.pop(foundeditem)
        toast.success(`You've removed the "${foundeditem.title}" from the cart`,{
          position: "bottom-center",
          theme:"dark",
            autoClose: 1000,
        })
      } 
    }
  },
});

export const { itemsAdded, itemsDeleted,incrementedquantity,decrementedquantity } = cartSlice.actions;
export default cartSlice.reducer;
