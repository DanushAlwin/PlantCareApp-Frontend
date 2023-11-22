import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
        ,plants:[]
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
            state.loginMode = action.payload.mode;
        },
        logout:(state)=>{
            state.user=null;
                  state.loginMode = action.payload.mode;
        },
        addPlants: (state, action) => {
            return {
                ...state,
                plants: [...state.plants, action.payload],
          }},
          deletePlants: (state, action) => {
            const idToDelete = action.payload.id;
            state.plants = state.plants.filter((plant) => plant.id !== idToDelete);
          },
    }  
})
export const {login,logout}=userSlice.actions;

export const selectUser =(state)=>state.user.user;
export const { addPlants, deletePlants } =userSlice.actions;

export default userSlice.reducer;