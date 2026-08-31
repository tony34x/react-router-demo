// TODO: Finish the rest of the buttons for the About Me and About Us pages to route the user back to the home page.
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
       <button type="button" onClick={() => navigate("/")}>
        Back to the home page
      </button>
    </ul>
  );
}

export default Reviews;
