import React, {useState} from "react";
// import { useState } from "react";
import Title from "../src/components/Title";
import { BsEmojiSmileFill } from "react-icons/bs";
import { AiOutlineComment, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function LikeButtonApp() {
  const [count, setcount] = useState(0);
  const [like, setLike] = useState(false);
  
  const onclickHandler = () => {
    setcount(count + 1);
    //toggling the like status
    setLike(!like ? true : false);
  };
  return (
    <div>
      <Title title="Hi! i m like button component" />
      <div className="container card">
        <div className="headerDiv">
          <BsEmojiSmileFill className="mr-2 fs-3" />
          <h4>Likes {count}</h4>
        </div>
        <div className="imgDiv">
          <img
            src="./03LikeButton/assets/images/dharmendra.jpg"
            alt="img missing"
            id="likeImage"
            onDoubleClick={onclickHandler}
          />
        </div>
        <div className="footerDiv">
          <p className="click">
            comment <AiOutlineComment className="mr-2" />
          </p>
          <p onClick={onclickHandler} className="click">
            like{" "}
            {like ? <AiFillHeart className="danger" /> : <AiOutlineHeart />}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LikeButtonApp;
