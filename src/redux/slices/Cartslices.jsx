import { createSlice } from "@reduxjs/toolkit";

const Cartslices = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            if (existingItem) {
               state.cart= state.cart.map((item) =>
                    item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                )
            }else{
                state.cart.push(action.payload)
            }
            
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        incrementQty:(state,action)=>{
            state.cart = state.cart.map((item)=>
            item.id === action.payload.id ? {...item, qty : item.qty + 1 }
            : item)
        },
        decrementtQty:(state,action)=>{
            state.cart = state.cart.map((item)=>
            item.id === action.payload.id ? {...item, qty : item.qty - 1 }
            : item)
        }
    }
})
export const { addToCart, removeFromCart,incrementQty,decrementtQty } = Cartslices.actions;
export default Cartslices.reducer;