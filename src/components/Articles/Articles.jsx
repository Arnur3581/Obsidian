import React from "react";
import "./Articles.css";

const Articles = () => {
  return (
    <>
      <div className="articles">
        <div className="container">
          <div className="articles__inner">
            <div className="articles__wrapper" data-aos="fade-down-right">
              <h1 className="articles__title">Check out our articles!</h1>
              <a href="#articles" className="link">
                View
                <div className="link__arrow"></div>
              </a>
            </div>
            <span className="articles__icon" data-aos="fade-up-left">
              📰
            </span>
          </div>
          <div className="articles__posts">
            <div className="articles__posts-head">
              <span>
                <button className="link">Create post</button>
                <h2 className="articles__posts-title">Our Articles</h2>
                <div className="section__line"></div>
              </span>
            </div>
            <div className="articles__posts-body">
              <div className="article">
                <div className="article__title">Update 2.0.5</div>
                <div className="section__line"></div>
                <div className="article__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eos. Repellendus odit dolor autem voluptatem qui architecto
                  nesciunt incidunt alias in, dolorum quasi commodi at
                </div>
                <span className="article__date">2 weeks ago</span>
              </div>
              <div className="article">
                <div className="article__title">Update 2.0.0</div>
                <div className="section__line"></div>
                <div className="article__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eos. Repellendus odit dolor autem voluptatem qui architecto
                  nesciunt incidunt alias in, dolorum quasi commodi at
                </div>
                <span className="article__date">1 month ago</span>
              </div>
              <div className="article">
                <div className="article__title">Update 1.9.5</div>
                <div className="section__line"></div>
                <div className="article__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  eos. Repellendus odit dolor autem voluptatem qui architecto
                  nesciunt incidunt alias in, dolorum quasi commodi at
                </div>
                <span className="article__date">3 month ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
