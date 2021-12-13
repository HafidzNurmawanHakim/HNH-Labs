import React from "react";
import { useHistory } from "react-router";
import "./admin.css";

const Admin = () => {
  const history = useHistory();
  return (
    <div id="admin">
      <p>Admin Page</p>
      <button onClick={() => history.push("/create-post")}>Create Device Post</button>
      <button onClick={() => history.push("/create-article")}>Create Article</button>
    </div>
  );
};

export default Admin;
