import {createContext,useContext} from 'react'

// here we create context

export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {},
})

// here we use provider (supply data)

export const ThemeProvider = ThemeContext.Provider

// custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}