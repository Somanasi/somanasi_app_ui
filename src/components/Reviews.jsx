import React from 'react'
import { GoQuote } from "react-icons/go"

const Reviews = ({ review_image, name, review }) => {
    return (
        <div className="review-container">
            <div className="reviewer-dp">
                <img src={review_image} alt={name} />
            </div>
            <article className="reviewer-content">
                <p>
                    <GoQuote size={10} />
                    {review}
                    <span className="closing-quote">
                        <GoQuote size={10} />
                    </span>
                </p>
            </article>
            <div className="reviewer-id">
                <span>{name}</span>
            </div>
        </div>
    )
}

export default Reviews