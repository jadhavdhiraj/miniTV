const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice(
    {
        name: 'app',
        initialState: {
            isToggle: true
        },

        reducers:{
            toggleMenu:(state)=>{
                state.isToggle = !state.isToggle;
            },

            closeMenu:(state)=>{
                state.isToggle=false;
            }
        }

    }
)

export const {toggleMenu,closeMenu} = appSlice.actions;

export default appSlice.reducer;
