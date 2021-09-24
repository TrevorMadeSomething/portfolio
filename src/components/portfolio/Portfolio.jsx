import { useState, useEffect } from "react";

import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
} from "../../data";
export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      key: 1,
      id: "featured",
      title: "Featured",
    },
    {
      key: 2,
      id: "web",
      title: "Web App",
    },
    {
      key: 3,
      id: "mobile",
      title: "Mobile App",
    },
    {
      key: 4,
      id: "design",
      title: "Design",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <>
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              key={item.id}
            />
          ))}
        </ul>
        <div className="container">
          {data.map((data) => (
            <div className="item">
              <a href={data.a} target="_blank" rel="noreferrer">
                <img src={data.img} alt="" />
                <h3 href={data.a}>{data.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
