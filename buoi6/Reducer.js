import { createReducer } from '@reduxjs/toolkit'
import { addItem, removeItem } from './Actions'

// khoi tao trang thai
const initState = { item: [] };
//tao reducer(khi click se goi den)
const cartReducer = createReducer(initState,buider=>{
    buider.addCase(addItem,(state,action)=>{
        //xu ly khi da ton tai san pham trong gio hang
        const tonTaiItemIndex = state.item.findIndex(
            item=>item.id === action.payload.id  // neu id da ton tai thi tang len 1
        )
        //xu ly khi chua co san pham trong gio hang
        if(tonTaiItemIndex !== -1){ // da ton tai id
            state.item[tonTaiItemIndex].quantity++;
        }else{
            state.item.push({...action.payload,quantity: 1})
        }
    })
          .addCase(removeItem,(state,action)=>{
            const tonTaiItemIndex = state.item.findIndex(
                item => item.id === action.payload.id
            )
            if(tonTaiItemIndex !== -1){
                state.item[tonTaiItemIndex].quantity--;
            }
            if(state.item[tonTaiItemIndex].quantity == 0){  //so luong = 0 thi xoa khoi gio hang
                state.item.splice(tonTaiItemIndex,1)
            }
          });
})
export default cartReducer;