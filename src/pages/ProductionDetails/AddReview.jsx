import Rating from "@mui/material/Rating";
import ReviewItem from "./ReviewItem";
import { useRef, useState } from "react";

export default function AddReview() {
  let nameRef = useRef();
  let commentRef = useRef();
  let emailRef = useRef();
  let wrapperReviewsRef = useRef();
  let [ValueRate, setValueRate] = useState();
  let [reviews, setReviews] = useState([
    {
      reviewer: "Admin",
      date: "20 Apr, 2022",
      rate: 4.5,
      comment: "Material's excellent and delivery was speedy.",
    },
    {
      reviewer: "helen",
      date: "13 June, 2022",
      rate: 5,
      comment: "Satisfactory product, content with it.",
    },
    {
      reviewer: "john",
      date: "10 June, 2022",
      rate: 4,
      comment:
        "The cost of the item on this website is lower compared to other websites.",
    },
  ]);

  let handleAddReview = (e) => {
    e.preventDefault();

    setReviews([
      ...reviews,
      {
        reviewer: nameRef.current.value,
        rate: ValueRate,
        comment: commentRef.current.value,
      },
    ]);
    nameRef.current.value = "";
    commentRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div className="wrapperReviews">
      <div ref={wrapperReviewsRef} className="wrapperExistReviews">
        {reviews.map((review) => {
          return (
            <ReviewItem
              reviewer={review.reviewer}
              date={review.date}
              rate={review.rate}
              comment={review.comment}
            />
          );
        })}
      </div>
      <div className="wrapperAddReview">
        <p className="addReviewTitle">Add A Review</p>
        <p className="descReviewTitle">
          Your Email Address Will Not Be Published. Required Fields Are Marked *
        </p>
        <p className="yourRate">Your Rating *</p>
        <Rating
          onChange={(event, newValue) => {
            console.log(newValue);
            setValueRate(newValue);
          }}
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
        />
        <p className="yourReviewTitle">Your Review *</p>
        <form onSubmit={handleAddReview}>
          <textarea
            required
            ref={commentRef}
            className="yourReviewBox"
            name="comment"
            cols="30"
            rows="10"
          ></textarea>
          <p className="reviewNameTitle">Name *</p>
          <input
            required
            ref={nameRef}
            className="reviewNameBox"
            type="text"
            name="name"
          />
          <p className="reviewEmailTitle">Email *</p>
          <input
            required
            ref={emailRef}
            className="reviewCommentBox"
            type="email"
            name="email"
          />
          <input type="submit" className="submitReview" value={"Submit"} />
        </form>
      </div>
    </div>
  );
}
