"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MdOutlineLightMode } from "react-icons/md";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className='duration-200 m-2 p-2'>
      <MdOutlineLightMode className='size-7' />
    </button>
  )
}

export default ThemeChanger