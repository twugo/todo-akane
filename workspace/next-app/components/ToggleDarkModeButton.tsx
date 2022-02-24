import { useState, useEffect } from "react"

const ToggleDarkModeButton = () => {
  const [isDark, SetIsDark] = useState(false);

  useEffect(() => {
    // https://tailwindcss.com/docs/dark-mode
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      SetIsDark(true);
    } else {
      document.documentElement.classList.remove('dark')
      SetIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      SetIsDark(false);
    } else {
      // https://tailwindcss.com/docs/dark-mode
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      }
      SetIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="hover:bg-slate-200 focus:ring-4 focus:ring-gray-300
                    dark:text-gray-600 dark:hover:bg-gray-900 dark:focus:ring-gray-900
                      font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
    >
      {isDark
        ?
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      }
    </button>
  )
}

export default ToggleDarkModeButton
