import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
  quantity: 0
};

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.quantity++;
            if(!existingItem){
                state.items.push({
                    id : newItem.id,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price,
                    name : newItem.title,
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeToCart(state,action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.quantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            }else{
                existingItem.quantity--;
            }
        }
    }
})

export const cartAction = cartSlice.actions

export default cartSlice;