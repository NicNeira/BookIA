/* global localStorage */
import '@theme-toggles/react/css/Classic.css'

import React, { useEffect, useState } from 'react'
import { Classic } from '@theme-toggles/react'

export const Darkmode = () => {
  // useState para establecer el tema
  const [checked, setChecked] = useState(true)
  // se define una constante root que representa el elemento html principal de la aplicación.
  const root = window.document.documentElement
  // constantes almacenan los nombres de las clases CSS para los temas claros y oscuros respectivamente
  const lightTheme = 'light'
  const darkTheme = 'dark'
  // variable para almacenar el tema actual.

  let theme = localStorage.getItem('theme')

  useEffect(() => {
    if (theme === lightTheme || theme === darkTheme) {
      root.classList.add(theme)
      setChecked(theme === darkTheme)
    } else {
      root.classList.add(lightTheme)
      setChecked(false)
    }
  }, [])

  const handleChange = () => {
    if (theme === darkTheme) {
      root.classList.replace(darkTheme, lightTheme)
      localStorage.setItem('theme', 'light')
      theme = lightTheme
      setChecked(false)
    } else {
      root.classList.replace(lightTheme, darkTheme)
      localStorage.setItem('theme', 'dark')
      setChecked(true)
    }
  }

  return (
    <>
      <Classic
        className='dark:text-white text-black'
        toggled={!checked}
        toggle={handleChange}
      />
    </>
  )
}
