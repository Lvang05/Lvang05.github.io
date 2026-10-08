import { useEffect, useRef } from 'react'

const ThemeToggle = ({ theme, onToggleTheme }) => {
    const buttonRef = useRef(null)
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        buttonRef.current.focus()
    }, [theme])

    const label = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'
    const current = theme === 'light' ? 'Light Mode' : 'Dark Mode'

    return (
        <button
            ref={buttonRef}
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={label}
        >
            {theme === 'light' ? '🌙' : '☀️'} {current}
        </button>
    )
}

export default ThemeToggle