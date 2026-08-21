import "./Reviews.css";
import { useParams } from "react-router-dom";

function Review({ reviews }) {
  const { reviewId } = useParams();
  const review = reviews[Number(reviewId) - 1];

  if (!review) {
    return <p className="review">Review not found.</p>;
  }

  return (
    <article className="review reviews__item">
      <h3>{review.title}</h3>
      <p>{review.text}</p>
      <p className="review__rating">Final rating: {review.rating}/5</p>
    </article>
  );
}

export default Review;
