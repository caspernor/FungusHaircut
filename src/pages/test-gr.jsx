import { useGoogleReviews } from 'hooks/useGoogleReviews.js';

const Reviews = ({ placeId }) => {
  const { reviews } = useGoogleReviews(placeId);

  return (
    <div class="reviews">
      {reviews.map((review) => (
        <div class="review">
          <div class="rating">
            {review.rating}
          </div>
          <div class="review-text">
            {review.reviewText}
          </div>
          <div class="reviewer-name">
            {review.reviewerName}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
