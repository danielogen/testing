import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { createContext, useEffect, useState } from "react"

const Root = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = window.localStorage.getItem("DARK_MODE")
    return storedDarkMode !== null ? storedDarkMode : false
  })

  const toggleDarkMode = () => {
    if (window.localStorage.getItem("DARK_MODE") == "true") {
      window.localStorage.setItem("DARK_MODE", "false")
      setDarkMode("false")
      return "Dark Mode False"
    } else {
      window.localStorage.setItem("DARK_MODE", "true")
      setDarkMode("true")
      return "Dark Mode True"
    }
  }

  return (
    <main className={`${darkMode == "true" ? "dark" : ""} bg-white`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Outlet />
    </main>
  )
}

export default Root
