import React from "react";
import "./author.css";
import { Date } from "..";

const Author = ({ author, date, width, height }) => {
  return (
    <div className="author" style={{ width, height }}>
      <i className="fas fa-user-tag"></i>
      <p>{author}</p>
      <Date date={date} />
    </div>
  );
};

export default Author;
