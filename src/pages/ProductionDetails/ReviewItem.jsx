import React from "react";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import AvatarSvg from "../../svg/AvatarSvg";
import "./ReviewItem.scss";

export default function ReviewItem({ reviewer, date, comment }) {
  return (
    <div className="wrapperReviewItem">
      <div className="avatarReview">
        <Avatar sx={{ bgcolor: "null" }} variant="square">
          <AvatarSvg />
        </Avatar>
      </div>
      <div className="reviewContent">
        <Rating size="small" name="read-only" value={4} readOnly />
        <p className="reviewerName">
          {reviewer} <span>- {date}</span>
        </p>
        <p className="comment">{comment}</p>
      </div>
    </div>
  );
}
