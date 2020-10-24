import React from "react";
import "./nestedComments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faRetweet,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

function searchTree(nodes, value, parents = []) {
  var result;
  nodes.some((o) => {
    var children;
    if (o.id === value) {
      return (result = o);
    }
    if (
      o.children &&
      (children = searchTree(o.children, value, parents).result)
    ) {
      parents.push({ author: o.author, id: o.id });
      return (result = Object.assign({}, o, { children }));
    }
  });
  console.log(parents);

  console.log("value: ", value);

  return { parents, result };
}

export function Comment({
  comment,
  type,
  parents,
  id,
  commentData,
  createComment,
}) {
  const nestedComments = (comment.children || []).map((cmt) => {
    const searchTreeParents = searchTree(commentData, cmt.id).parents;
    return (
      <Comment
        id={cmt.id}
        key={cmt.id}
        comment={cmt}
        type="child"
        parents={searchTreeParents}
        commentData={commentData}
        createComment={createComment}
      />
    );
  });

  const getReplyingToString = () => {
    return parents.map((p) => "@" + p.author).join(" and ");
  };

  return (
    <div>
      <div className="profileNestedComments feeds">
        <div className="feedNestedComment commentFeed">
          <div>
            <div className="twitterIconDiv">
              <img
                alt=""
                draggable="true"
                src={comment.author_profile_pic}
                class="imgHeading"
              />
            </div>
          </div>
          <div className="headingNestedCommentsDiv">
            <div className="headingNestedComments">
              <div>
                <div className="authorNameDivNestedComments">
                  <h3 className="profileName">{comment.author}</h3>
                  <span className="dateNestedComments"> • Sept 21</span>
                </div>
                <span className="mentionedProfile">
                  {parents ? `Replying to ${getReplyingToString()}` : null}
                </span>
              </div>
            </div>
            <div className="subHeading">
              <p className="headingTextNestedComments"> {comment.text}</p>
            </div>
            <div className="iconsDivNestedComments">
              <div
                className="activityIconDiv"
                onClick={() => createComment(null)}
              >
                <i class="far fa-comment"></i>
              </div>
              <div className="activityIconDiv">
                <i class="fas fa-retweet"></i>
              </div>
              <div className="activityIconDiv">
                <i class="far fa-heart"></i>
              </div>
              <div className="activityIconDiv">
                <i class="fas fa-share"></i>
              </div>
            </div>
          </div>
        </div>
        <div>{nestedComments}</div>
      </div>
    </div>
  );
}

export const NestedComments = ({ commentData, createComment }) => {
  return (
    <div>
      {commentData.map((cmt) => {
        return (
          <Comment
            id={cmt.id}
            key={cmt.id}
            comment={cmt}
            commentData={commentData}
            createComment={createComment}
          />
        );
      })}
    </div>
  );
};
