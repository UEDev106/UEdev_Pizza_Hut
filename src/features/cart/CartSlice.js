import {createSlice} from '@reduxjs/toolkit'

const initialState={
    cart:[]
}

const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItems(state,action){
            // payload === newItem
           state.cart.push(action.payload)
        },
        deleteItems(state,action){
            //payload == pizzaId
            state.cart = state.cart.filter(item=>item.pizzaId !== action.payload)
        },
        increaseItemQuantity(state,action){
            //payload = pizzaid
           const item=state.cart.find(item=>item.pizzaId === action.payload);
           item.quantity++;
           item.totalPrice=item.quantity * item.unitPrice;
        },
        decItemQuantity(state,action){
          //payload === pizzaID
          const item=state.cart.find(item=>item.pizzaId === action.payload);
          item.quantity--;
          item.totalPrice=item.quantity * item.unitPrice;
          if(item.quantity === 0) CartSlice.caseReducers.deleteItems(state,action)
        },
        clearItems(state){
            state.cart=[]
        }
    }
})

export const {addItems,deleteItems,increaseItemQuantity,decItemQuantity,clearItems}=CartSlice.actions;

export default CartSlice.reducer;
//here we find the id of which pizza that we are going to delete and its quantity
export const deleteCartQuatityById=(id)=>(state)=>state.cart.cart.find((item)=>item.pizzaId === id)?.quantity ?? 0;

export const getCart=(state)=>state.cart.cart;

export const getTotalQuantity=(state)=>state.cart.cart.reduce((sum,item)=>sum + item.quantity,0)

export const getTotalPrice=(state)=>state.cart.cart.reduce((sum,item)=>sum + item.totalPrice,0)