import Rating from "@mui/material/Rating";
import ReviewItem from "./ReviewItem";

export default function AddReview() {
  return (
    <div className="wrapperReviews">
      <div className="wrapperExistReviews">
        <ReviewItem
          reviewer="Admin"
          date="20 Apr, 2022"
          comment="Material's excellent and delivery was speedy."
        />
        <ReviewItem
          reviewer="helen"
          date="13 June, 2022"
          comment="Material's excellent and delivery was speedy."
        />
        <ReviewItem
          reviewer="john"
          date="10 June, 2022"
          comment="Material's excellent and delivery was speedy."
        />
      </div>
      <div className="wrapperAddReview">
        <p className="addReviewTitle">Add A Review</p>
        <p className="descReviewTitle">
          Your Email Address Will Not Be Published. Required Fields Are Marked *
        </p>
        <p className="yourRate">Your Rating *</p>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <p className="yourReviewTitle">Your Review *</p>
        <textarea
          className="yourReviewBox"
          name="comment"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <p className="reviewNameTitle">Name *</p>
        <input className="reviewNameBox" type="text" name="name" />
        <p className="reviewEmailTitle">Email *</p>
        <input className="reviewCommentBox" type="email" name="email" />
        <button className="submitReview">Submit</button>
      </div>
    </div>
  );
}
