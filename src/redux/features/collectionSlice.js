import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection(state, action) {
      //checks if state item have similar id of payload data find return true or false
      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id
      );

      // if alreadyExist false means same id nhi hai state me to false rahega aur ! ki wajeh se if me chal jayga and state me update hoga via pyload and also LS me JSON string me convert karke add
      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection(state, action) {
        // check if payload id is same not same with state.items means diffrent and condn true means return in filter and if id is same but we are checking gor not eq. become false that id item not goto new state.item
        state.items= state.items.filter(item=> item.id !== action.payload.id)

        //and save new state data in LS
        localStorage.setItem('collection',JSON.stringify(state.items));
    },
    clearCollection(state) {
        state.items=[];
        localStorage.removeItem('collection')
    },
  },
});

export const { addCollection, removeCollection, clearCollection } =
  collectionSlice.actions;

export default collectionSlice.reducer;
