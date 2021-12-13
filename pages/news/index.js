import { Gap, SlideImg, Title, NewsMainCard } from "../../components";
import CardNews from "../../components/molecule/cardnews";
import PopularSection from "../../components/molecule/popularsection";
import "./news.css";

const News = (props) => {
  return (
    <div id="news">
      <div className="column1">
        <div className="slide-img-wrapper">
          <SlideImg />
        </div>
        <Gap height={20} />
        <div className="news-card">
          <NewsMainCard />
        </div>
      </div>
      <Gap height={20} />
      <Title title="Gadget" />
      <div className="column2">{/* <PopularSection /> */}</div>
      <Gap height={20} />
      <Title title="Smart TV" />
      <div className="smarttv">
        <CardNews />
      </div>
      <Gap height={20} />
      <Title title="Desktop" />
      <div className="column2">
        <PopularSection />
      </div>
    </div>
  );
};

export default News;
