import { useState, useEffect } from 'react'
import StarRating from './StarRating'

const HobbyList = () => {
    const [hobbies, setHobbies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/data/hobbies.json')
                if (!response.ok) throw new Error('Failed to fetch hobbies')
                const data = await response.json()
                setHobbies(data)
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setIsLoading(false)
            }
        })()
    }, [])

    useEffect(() => {
        if (!isLoading && !error) {
            document.title = `${hobbies.length} Favorite Hobbies`
        }
    }, [hobbies, isLoading, error])

    if (isLoading) return <div className="loading">Loading hobbies...</div>
    if (error) return <div className="error">Error: {error}</div>

    return (
        <section>
            <h2>Favorite Hobbies</h2>
            <ul>
                {hobbies.map(({ id, name, category, rating }) => (
                    <li key={id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>{name} — {category}</span>
                        <StarRating initialRating={rating} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default HobbyList