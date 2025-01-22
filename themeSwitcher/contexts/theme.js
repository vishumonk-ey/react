import { createContext, useContext } from "react"

export const themeContext= createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme : ()=>{},
})

export const ThemeProvider=themeContext.Provider

export const useTheme=()=>{
    return useContext(themeContext)
}

// eeverything is done in single file , while in case of 1st approach we were doing in seperate file