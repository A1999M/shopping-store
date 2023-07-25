import React from "react";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import AvatarSvg from "../../svg/AvatarSvg";
import { motion } from "framer-motion";
import "./ReviewItem.scss";

export default function ReviewItem({ reviewer, date, comment, rate }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0.8, y: 50 }}
      animate={{ opacity: 1, scaleY: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 110 }}
      className="wrapperReviewItem"
    >
      <div className="avatarReview">
        <Avatar sx={{ bgcolor: "null" }} variant="square">
          <AvatarSvg />
        </Avatar>
      </div>
      <div className="reviewContent">
        <Rating
          size="small"
          name="half-rating"
          defaultValue={rate}
          precision={0.5}
          readOnly
        />
        <p className="reviewerName">
          {reviewer} <span>- {date ? date : "today"}</span>
        </p>
        <p className="comment">{comment}</p>
      </div>
    </motion.div>
  );
}
