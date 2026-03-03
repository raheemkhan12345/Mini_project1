import React from 'react'
import useTheme from '../context/theme'

const ThemeBtn = () => {

  const { themeMode, lightTheme, darkTheme } = useTheme('light')

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
    if (darkModeStatus) {
      darkTheme()
    } else {
      lightTheme()
    }
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">

      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === 'dark'}
      />

      <div className="
        w-11 h-6 
        bg-gray-200 
        rounded-full 
        peer-focus:ring-4 
        peer-focus:ring-blue-300 
        dark:peer-focus:ring-blue-800 
        dark:bg-gray-700 
        peer-checked:bg-blue-600
        relative
        after:content-[''] 
        after:absolute 
        after:top-[2px] 
        after:left-[2px] 
        after:bg-white 
        after:border 
        after:rounded-full 
        after:h-5 
        after:w-5 
        after:transition-all 
        peer-checked:after:translate-x-5
      ">
      </div>

      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
        Toggle Theme
      </span>

    </label>
  )
}

export default ThemeBtn