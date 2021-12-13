import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About, Admin, AllBrands, CreateArticle, CreateDevicePost, Feature, Home, News, Post, Review } from "..";
import { Footer, Navbar } from "../../components";
import "./mainApp.css";
const MainApp = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/create-post">
            <CreateDevicePost />
          </Route>
          <Route path="/create-article">
            <CreateArticle />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/feature">
            <Feature />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/all-brands">
            <AllBrands />
          </Route>
          <Route path="/post/:postId">
            <Post />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <div className="footer-wrapper">
        <Footer />
        <div className="copyright">
          <p>
            Made With <i className="fas fa-heart"></i> And <i className="fas fa-coffee"></i> In BaseCamp &copy; 2021 HNH Labs
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainApp;
