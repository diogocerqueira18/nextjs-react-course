import { createContext, useEffect, useState } from "react";

// type Theme = 'dark' | '' 

interface AppContextProps {
  theme?: string;
  changeTheme?: () => void
}

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
  const [theme, setTheme] = useState('dark')

  function changeTheme() {
    const newTheme = theme === '' ? 'dark' : ''
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const themeSaved = localStorage.getItem('theme')
    setTheme(themeSaved)
  }, [])

  return (
    <AppContext.Provider value={{
      theme,
      changeTheme
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext