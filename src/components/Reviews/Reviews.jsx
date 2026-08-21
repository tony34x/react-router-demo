// TODO: Pick up here tomorrow. 
// Current status: Review item button is set up to use useNavigate() to send users back to the "/reviews" list.
// Next step: Continue building out the next feature or lesson step.

import "./Reviews.css";
import { useParams, useNavigate, Link } from "react-router-dom";


function Reviews({ reviews }) {
  const navigate = useNavigate();
  const params = useParams();
  let id = params.reviewId;
  id = id - 1;

  return (
    <ul className="reviews">
      {reviews.map((review, index) => (
        <li className="reviews__item" key={review._id ?? index}>
          <h3>{review.title}</h3>
          <p>{review.text}</p>
          <p className="review__rating">Final rating: {review.rating}/5</p>
          <Link to={`/reviews/${index + 1}`}>Read more</Link>
        </li>
      ))}
     <button type="button" onClick={() => navigate("/reviews")}>
            Back to the review list
          </button>
    </ul>
  );
}

export default Reviews;
