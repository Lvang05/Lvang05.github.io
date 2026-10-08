import ThemeToggle from './ThemeToggle'

const Header = ({ name, tagline, theme, onToggleTheme, children }) => {
    return (
        <header className={theme === 'dark' ? 'header dark' : 'header light'}>
            <h1>{name}</h1>
            <p>{tagline}</p>
            <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
            {children}
        </header>
    )
}

export default Header