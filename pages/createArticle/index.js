import Axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Gap, Input, Label, Textarea, Title } from "../../components";
import "./createArticle.css";

const CreateArticle = () => {
  const inputRef = useRef([""]);

  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [image, setImage] = useState(inputRef);
  const [author, setAuthor] = useState("");

  const onSubmit = () => {
    console.log("image>>", image.File);
    const data = new FormData();

    [...image].forEach((img) => {
      console.log("image>", img);
      data.append("image", img);
    });

    data.append("category", category);
    data.append("title", title);
    data.append("content1", content1);
    data.append("content2", content2);
    data.append("content3", content3);
    data.append("author", author);
    console.log("form data>>>", data);

    Axios.post("http://localhost:4000/create-article", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((result) => {
        console.log("Post Success!", result);
      })
      .catch((err) => {
        console.log("err: ", err);
      });

    // setCategory("");
    // setTitle("");
    // setContent1("");
    // setContent2("");
    // setContent3("");
    setImage(inputRef);
    // setAuthor("");
  };

  return (
    <div id="create-article">
      <div className="create-article-title">
        <Title title="Create Article" />
      </div>
      <Gap height={30} />
      <div className="create-article-wrapper">
        <div className="article-input">
          <div className="label-wrapper">
            <Label label="Category" />
          </div>
          <Input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="article-input">
          <div className="label-wrapper">
            <Label label="Title" />
          </div>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="article-input">
          <div className="label-wrapper">
            <Label label="Content 1" />
          </div>
          <Textarea value={content1} onChange={(e) => setContent1(e.target.value)} />
        </div>
        <div className="article-input">
          <div className="label-wrapper">
            <Label label="Content 2" />
          </div>
          <Textarea value={content2} onChange={(e) => setContent2(e.target.value)} />
        </div>
        <div className="article-input">
          <div className="label-wrapper">
            <Label label="Content 3" />
          </div>
          <Textarea value={content3} onChange={(e) => setContent3(e.target.value)} />
        </div>
        <div className="article-input">
          <div className="label-wrapper">
            <Label label="Image " />
          </div>
          <Input type="file" name="image" multiple="multiple" onChange={(e) => setImage(e.target.files)} />
        </div>
        {/* <div className="article-input">
          <div className="label-wrapper">
            <Label label="Image 2" />
          </div>
          <Input type="file" onChange={(e) => setImage2(e.target.files[0])} />
        </div>
        <div className="article-input">
          <div className="label-wrapper">
            <Label label="Image 3" />
          </div>
          <Input type="file" onChange={(e) => setImage3(e.target.files[0])} />
        </div>*/}
        <div className="article-input">
          <div className="label-wrapper">
            <Label label="Author" />
          </div>
          <Input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <Gap height={30} />
        <div className="create-btn-wrapper">
          <Button title="Create" onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
