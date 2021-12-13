import Axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Gap, Jumbotron, PostComments, ShareFeature, Tags, UserReply } from "../../components";
import ListSpec from "../../components/molecule/listSpec";
import "./post.css";

const Post = () => {
  const { readPost } = useSelector((state) => state.globalReducer);

  useEffect(() => {
    Axios.get(`http://localhost:4000/article/${readPost}`)
      .then((result) => {
        console.log("result", result);
        const responseAPI = result.data;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div id="post">
      <div>
        <h1 className="post-title"> Title</h1>
      </div>
      <div className="jumbotron-wrapper">
        <Jumbotron />
      </div>
      <Gap height={15} />
      <ShareFeature />
      <Gap height={15} />
      <ListSpec />
      <Gap height={15} />
      <article>
        <h2 className="article-title">Review</h2>
        <Gap height={30} />
        <p>sodbv[OAVO[Isnd[voinas[dovnosdinvosdinvosdnvosdnv</p>
      </article>
      <Gap height={20} />
      <Tags />

      <Gap height={10} />
      <div id="ulasan">
        <h2 className="ulasan-title">Komentar</h2>
        <Gap height={5} />
        <UserReply />
        <UserReply />
        <UserReply />
        <Gap height={30} />
        <div className="post-comments-wrapper">
          <h2>Berikan Ulasan</h2>
          <Gap height={20} />
          <PostComments />
        </div>
      </div>
    </div>
  );
};

export default Post;
