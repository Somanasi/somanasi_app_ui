import React from "react";
import { GoQuote } from "react-icons/go";

const Reviews = ({ review }) => {
  return (
    <article className={`review-container pb-8 `}>
      <div className="reviewer-dp pb-8 pt-8 flex justify-center">
        <img
          src={review.review_image}
          alt={review.name}
          className="rounded-full w-32 h-32"
        />
      </div>
      <div className="reviewer-content pt-4 text-center px-4">
        <p>
          <span className="openig-quote">
            <GoQuote size={30} />
          </span>
          <span className="review-text">{review.review}</span>
          <span className="closing-quote">
            <GoQuote size={30} />
          </span>
        </p>
      </div>
      <div className="reviewer-id pt-8 text-center">
        <span className="block text-sm font-bold italic text-information">
          {review.name}
        </span>
      </div>
    </article>
  );
};

export default Reviews;
