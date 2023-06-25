import React, { useState } from "react";
import "./Acodian.css";

export const Acodian = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className="acordian-header" onClick={handleClick}>
        <h2>click here to see more</h2>
        <button className="acordian-button">
          {visible === false ? "+" : "-"}
        </button>
      </div>
      {visible && (
        <p className="accodian-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet est
          eveniet dolores ratione repellat veniam dolor consectetur maiores,
          harum atque dolorem ipsum provident debitis laboriosam. Alias delectus
          ducimus nulla beatae?
        </p>
      )}
    </>
  );
};

export default Acodian;
