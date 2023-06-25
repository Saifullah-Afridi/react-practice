import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "./Like.module.css";

const Like = (props) => {
  const [changeBk, setChangeBk] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setChangeBk(true);
  };
  return (
    <AiOutlineHeart
      onClick={handleClick}
      style={changeBk ? styles.clicked : null}
    ></AiOutlineHeart>
  );
};

export default Like;
