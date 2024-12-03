import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme : "light"
}

export const themeSlice = createSlice(
    {   
        name : "ThemeSwitch",
        initialState,
        reducers : {
            setDarkTheme : (state,action) =>{
               state.theme = "dark"
            },
            setLightTheme : (state,action) =>{
              state.theme = "light"
            }
        }
    }
)

export const {setDarkTheme,setLightTheme} = themeSlice.actions


export default themeSlice.reducer