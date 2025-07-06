"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const current = localStorage.getItem("theme") ?? (prefersDark ? "dark" : "light")
    setDark(current === "dark")
    document.documentElement.classList.toggle("dark", current === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark"
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    setDark(!dark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
    </button>
  )
}
