import React, { useState, useEffect } from "react";
import "./Feed.css";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import retweeticon from "./assets/icons8-retweet.svg";
import { commentData, NestedComments } from "./nestedComments";
import { v4 as uuidv4 } from "uuid";
import Modal from "@material-ui/core/Modal";

const Feed = ({ parent, comment }) => {
  const [comments, setComments] = useState([]);
  const [rawComments, setRawComments] = useState([
    {
      id: 1,
      text: "Example comment here.",
      author: "Robin",
      dateCreated: "Sept 21",
      parent_id: null,
      likes: 5,
      retweets: 0,
      author_name: "Robin Bansal",
      author_profile_pic:
        "https://pbs.twimg.com/profile_images/875392068125769732/yrN-1k0Y_bigger.jpg",
    },
    {
      id: 2,
      text: "Another example comment text.",
      author: "Aditya",
      dateCreated: "Sept 21",
      parent_id: 1,
      likes: 6,
      retweets: 1,
      author_name: "Rahul Vyas",
      author_profile_pic:
        "https://pbs.twimg.com/profile_images/1207323798447390720/ruxlthQr_bigger.jpg",
    },
    {
      id: 3,
      text: "Another example comment text.",
      author: "Rahul",
      dateCreated: "Sept 21",
      parent_id: 2,
      likes: 8,
      retweets: 2,
      author_name: "Aditya Kashyap",
      author_profile_pic:
        "https://pbs.twimg.com/profile_images/802486347/sniper_01_bigger.jpg",
    },
    {
      id: 5,
      text: "Another example comment text.",
      author: "Udit",
      dateCreated: "Sept 21",
      parent_id: 1,
      likes: 9,
      retweets: 3,
      author_name: "Udit ",
      author_profile_pic:
        "https://pbs.twimg.com/profile_images/855147362020458496/PE0592ek_bigger.jpg",
    },
    {
      id: 4,
      text: "Example comment here 2.",
      author: "Siddharth",
      dateCreated: "Sept 21",
      parent_id: null,
      likes: 10,
      retweets: 4,
      author_name: "Sid",
      author_profile_pic:
        "https://pbs.twimg.com/profile_images/1067239764175323136/EQB7M_gq_bigger.jpg",
    },
  ]);
  const [commentParentId, setCommentParentId] = useState(null);
  const [open, setOpen] = useState(false);
  const [parentData, setParentData] = useState({
    img_url:
      "https://pbs.twimg.com/profile_images/1308010958862905345/-SGZioPb_bigger.jpg",
    id: uuidv4(),
    text: "Example comment here.",
    author: "robin",
    dateCreated: "Sept 21",
    parent_id: null,
    likes: 5,
    retweets: 0,
    author_name: "Robin Bansal",
    author_profile_pic:
      "https://pbs.twimg.com/profile_images/875392068125769732/yrN-1k0Y_bigger.jpg",
  });

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (rawComments && rawComments.length > 0) {
      setComments(nest(rawComments));
    }
  }, [rawComments]);

  const nest = (items, id = null, link = "parent_id") =>
    items
      .filter((item) => item[link] === id)
      .map((item) => ({ ...item, children: nest(items, item.id) }));

  const createComment = (id) => {
    setOpen(true);
    setCommentParentId(id);
  };

  var today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  // const [todayDate, setTodayDate] = useState([today]);
  return (
    <div className="profile feeds">
      <div className="feed">
        <div className="heading">
          <div className="twitterIconDiv">
            <img
              alt=""
              draggable="true"
              src="https://pbs.twimg.com/profile_images/1308010958862905345/-SGZioPb_bigger.jpg"
              className="imgHeading"
            />
          </div>
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
            className="feedImg"
          />
          <div className="dateDiv">
            <p>11:33 PM • Sept 21, 2020 from New Jersey, USA </p>
            <p className="twitterText"> • Twitter for iPhone</p>
          </div>
          <div className="activityDiv">
            <p className="retweets">
              <span className="numbers"> 1.7K</span>{" "}
              <span className="numberTexts">Retweets</span>
            </p>
            <p className="quotes">
              <span className="numbers">146</span>
              <span className="numberTexts"> Quote Tweets</span>
            </p>
            <p className="likes">
              <span className="numbers">13.5K</span>
              <span className="numberTexts"> Likes</span>
            </p>
          </div>
          <div className="iconsDiv">
            <div
              className="activityIconDiv"
              onClick={() => createComment(null)}
            >
              <FavoriteBorderOutlinedIcon />
            </div>
            <div className="activityIconDiv">
              <img src={retweeticon} />{" "}
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
      <div>
        <NestedComments commentData={comments} createComment={createComment} />

        {open && (
          <CreateCommentModal
            parentComment={
              rawComments.find((rc) => rc.id == commentParentId) || parentData
            }
            createComment={(text) => {
              setRawComments((existingComments) => {
                return [
                  ...existingComments,
                  {
                    id: uuidv4(),
                    text: text,
                    author: "robin",
                    dateCreated: "Sept 21",
                    parent_id: commentParentId,
                    author_profile_pic:
                      "https://pbs.twimg.com/profile_images/1067239764175323136/EQB7M_gq_bigger.jpg",
                    author_name: "robin",
                  },
                ];
              });
              setTimeout(() => {
                setOpen(false);
              }, 500);
            }}
            closePopup={handleClose}
          />
        )}
      </div>
    </div>
  );
};

function CreateCommentModal({ createComment, closePopup, parentComment }) {
  const [commentText, setCommentText] = useState("");
  useEffect(() => {
    return () => {
      setCommentText("");
    };
    console.log(parentComment);
  }, []);
  console.log(parentComment);
  return (
    <div className="popupBox">
      <div className="popupDiv">
        <div className="closeBtnDiv">
          <div className="col-2 closeBtnInnerDiv">
            <button className="closeBtn" onClick={() => closePopup()}>
              X
            </button>
          </div>
          <div className="col-10"></div>
        </div>
        <div>
          <div className="profileContent">
            <div className="col-3 popupProfileImgDiv">
              <img
                className="popupProfileImg"
                src={parentComment.author_profile_pic}
              />
            </div>
            <div className="col-9">
              <div className="popupAuthorDiv">
                <p className="popUpText popUpTextH">{parentComment.author}</p>
                <p className="popUpdate point"> • </p>
                <p className="popUpText popUpdate">
                  {parentComment.dateCreated}
                </p>
              </div>
              <div>
                <p className="popUpText">{parentComment.text}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="col-3"></div>
            <div className="col-9 formdiv">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (commentText && commentText.length > 0) {
                    createComment(commentText);
                  }
                }}
              >
                <input
                  type="text"
                  className="inputBox col-9"
                  placeholder="Tweet your reply"
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button type="submit">Post</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
