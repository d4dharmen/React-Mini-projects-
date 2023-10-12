import React, { useState } from "react";
// import { useState } from "react";
import Title from "../src/components/Title";
import { BsEmojiSmileFill } from "react-icons/bs";
import { AiOutlineComment, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function LikeButtonApp() {
  const [count, setcount] = useState(0);
  const [like, setLike] = useState(false);

  const onclickHandler = () => {
    if (!like) {
      setLike(true);
      setcount(count + 1);
    } else {
      setLike(false);
      setcount(count - 1);
    }
    //   setcount(count + 1);
    //   setLike(!like ? true : false);
  };
  return (
    <div>
      <Title title="Hi! i m like button component" />
      <div className="container card">
        <div className="headerDiv">
          <BsEmojiSmileFill className="mr-2 icon" />
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
          <AiOutlineComment className="click icon" />
          {like ? (
            <AiFillHeart className="danger click " onClick={onclickHandler} />
          ) : (
            <AiOutlineHeart onClick={onclickHandler} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LikeButtonApp;
