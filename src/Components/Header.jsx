const Header = ({ name, tagline, children }) => {
    return (
        <header>
            <h1>{name}</h1>
            <p>{tagline}</p>
            {children}
        </header>
    )
}

export default Header    