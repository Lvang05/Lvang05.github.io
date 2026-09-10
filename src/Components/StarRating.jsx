import { useState } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'

const StarRating = ({ initialRating = 0 }) => {
    const [rating, setRating] = useState(initialRating)

    return (
        <div style={{ display: 'inline-flex', gap: '2px', cursor: 'pointer' }}>
            {[1, 2, 3, 4, 5].map((starNumber) => (
                <span
                    key={starNumber}
                    onClick={() => setRating(starNumber)}
                >
                    {starNumber <= rating
                        ? <FaStar color="#4F2683" />
                        : <FaRegStar color="#FFC62F" />}
                </span>
            ))}
        </div>
    )
}

export default StarRating