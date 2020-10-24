import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { commentData, Comment } from "./nestedComments";
import CommentFeed from "./CommentFeed";

function App() {
  return (
    <div className="App ">
      {/* <Sidebar /> */}
      <div className="tweetFeed">
        <div className="fixedTop">
          <div className="backArrowDiv">
            <ArrowBackIcon />
          </div>
          <h3 className="thread">Thread</h3>
        </div>
        <Feed />
      </div>
    </div>
  );
}

export default App;
