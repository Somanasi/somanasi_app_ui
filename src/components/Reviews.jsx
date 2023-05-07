import React from 'react'
import { GoQuote } from "react-icons/go"

const Reviews = ({review}) => {
    return (
        <article className={`review-container`}>
            <div className="reviewer-dp">
                <img src={review.review_image} alt={review.name} />
            </div>
            <div className="reviewer-content">
                <p>
                    <GoQuote size={10} />
                    {review.review}
                    <span className="closing-quote">
                        <GoQuote size={10} />
                    </span>
                </p>
            </div>
            <div className="reviewer-id">
                <span>{review.name}</span>
            </div>
        </article>
    )
}

export default Reviews