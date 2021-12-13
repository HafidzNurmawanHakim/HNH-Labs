import React, { useEffect, useState } from "react";
import { Button, Link, Banner, Gap, Input, ListBrand, SlideImg, Title, BigCard, PopularSection } from "../../components";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setDataBanner, setDataPopularSection, setDataMainCard, setDataImageCarousel, setDataTripleCard } from "../../config/redux/action";

const Home = () => {
  const [loadMore, setLoadMore] = useState(5);
  const history = useHistory();
  const { dataArticle, dataPopularSection, dataTripleCard, dataImageCarousel, dataMainCard, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  const { readPost } = useSelector((state) => state.globalReducer);
  useEffect(() => {
    dispatch(setDataBanner(5));
    dispatch(setDataPopularSection());
    dispatch(setDataMainCard());
    dispatch(setDataTripleCard());
    dispatch(setDataImageCarousel());
  }, [dispatch]);

  const loadMoreHandle = () => {
    setLoadMore(loadMore <= page.totalData ? loadMore + 1 : page.totalData);
    console.log(loadMore);
    console.log(dataTripleCard);
  };

  const readPostHandle = (e) => {
    console.log(e.target.parentElement.id);
    dispatch({ type: "UPDATE_DATA_READ_POST", payload: e.target.parentElement.id });
    console.log("Id Post:", readPost);
    // history.push("/post/:postId");
  };

  return (
    <div id="home">
      <div className="jumbotron">
        <div className="slide-img-wrapper">
          <SlideImg dataImageCarousel={dataImageCarousel} />
        </div>
        <Gap height={10} />
        <div className="main-card">
          {dataMainCard.map((data) => {
            return <BigCard title={data.title} image={`http://localhost:4000/${data.image}`} height={500} />;
          })}
        </div>
      </div>

      <Gap height={20} />
      <Title title="Latest" />

      <div className="card-news">
        {dataTripleCard.map((post) => {
          return (
            <div className="card-wrapper">
              <BigCard title={post.title} image={`http://localhost:4000/${post.image}`} height={300} />
            </div>
          );
        })}
      </div>

      <div className="home-row">
        <div className="home-left">
          <div className="popular-wrapper">
            <Title title="Popular" />
            <PopularSection mainImage={dataMainCard} dataMiniCard={dataPopularSection} />
          </div>
          <div className="banner-wrapper">
            <Gap height={20} />
            <Title title="Rekomendasi" />
            {dataArticle.reverse().map((article) => {
              return <Banner id={article._id} key={article._id} title={article.title} body={article.content1} image={`http://localhost:4000/${article.image}`} handleReadPost={readPostHandle} />;
            })}
            <Gap height={20} />
            <div className="button-wrapper">
              <Button title="Load More" onClick={loadMoreHandle} />
            </div>
            <Gap height={20} />
          </div>
        </div>
        <div className="home-right">
          <div className="list-brand-wrapper">
            <Gap height={10} />
            <Title title="List Brand" />
            <ListBrand />
            <div className="tools">
              <Input placeholder="Cari Brand..." />
              <Link className="fas fa-search fas1" />
              <Link className="fas fa-list-ul fas1" onClick={() => history.push("/all-brands")} />
            </div>
          </div>
          <Gap height={30} />
        </div>
      </div>
    </div>
  );
};

export default Home;
