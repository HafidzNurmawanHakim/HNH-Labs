import React from "react";
import { Title, Gap, Link, ReviewCard } from "../../components";
import CardNews from "../../components/molecule/cardnews";
import "./review.css";

const Review = () => {
  return (
    <div id="review">
      <div className="review-container">
        <div className="review-header">
          <h1 className="review-title">Review</h1>
          <section>
            <div className="bar">
              <h4 className="tag-brand">Brands</h4>
              <i className="fas fa-chevron-right brand-chevron"></i>
            </div>
            <div className="sub-brand">
              <ul className="link-wrapper">
                <li className="brand-name">
                  <Link title="Advan" />
                </li>
                <li className="brand-name">
                  <Link title="Advan" />
                </li>
                <li className="brand-name">
                  <Link title="Advan" />
                </li>
                <li className="brand-name">
                  <Link title="Advan" />
                </li>
                <li className="brand-name">
                  <Link title="Advan" />
                </li>
                <li className="brand-name">
                  <Link title="Advan" />
                </li>
                <li className="brand-name">
                  <Link title="Advan" />
                </li>
                <li className="brand-name">
                  <Link title="Advan" />
                </li>
              </ul>
            </div>
          </section>
        </div>
        <Title title="Terbaru" />
        <div className="latest-wrapper">
          <ReviewCard />
        </div>
        <Gap height={30} />

        <Title title="Brand Name" />
        <div className="brand-device">
          <CardNews />
        </div>
      </div>
    </div>
  );
};

export default Review;
