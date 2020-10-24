import React, { useState, useEffect } from "react";
import "./CommentFeed.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const CommentFeed = ({ parent, comment }) => {
  var today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return (
    <div className="profile">
      <div className="logoColumn">
        <div className="twitterIconDiv">
          <img
            alt=""
            draggable="true"
            src="https://pbs.twimg.com/profile_images/1308010958862905345/-SGZioPb_bigger.jpg"
            class="imgHeading"
          />
          <div className="timeline"></div>
        </div>
      </div>
      <div className="feed">
        <div className="heading">
          <div>
            <h3 className="profileName">Twitter</h3>
            <span className="mentionedProfile">
              {parent ? `Replying to ${parent}` : null}
            </span>
          </div>
        </div>
        <div className="subHeading">
          <img
            alt="Round pushpin"
            draggable="false"
            src="https://abs-0.twimg.com/emoji/v2/svg/1f4cd.svg"
            className="pinIcon"
          />
          <p className="headingText"> {comment}</p>
        </div>
        <div className="emoticonMentionDiv">
          <div className="emoticonDiv">
            <img
              alt="😷"
              draggable="false"
              src="https://abs-0.twimg.com/emoji/v2/svg/1f637.svg"
              class="css-9pa8cd"
            />
          </div>
          <p className="replytoText">@umm_ahaha</p>
        </div>
        <div>
          <img
            alt="Tweet from @umm_ahaha on a billboard in New Jersey that reads, “if you dont wear a mask im gonna assume ur breath stinks”"
            draggable="true"
            src="https://pbs.twimg.com/media/EidSPNYXsAsx70i?format=jpg&amp;name=small"
            class="feedImg"
          />
          <div className="iconsDivComment">
            <div className="activityIconDiv">
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className="activityIconDiv">
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className="activityIconDiv">
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className="activityIconDiv">
              <FavoriteBorderOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentFeed;
