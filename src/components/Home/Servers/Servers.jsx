import React from "react";
import { List } from "./ServersList";

import "./Servers.css";

const Servers = () => {
  return (
    <section className="servers">
      <div className="servers__inner">
        <div className="servers__popular">
          <div className="servers__wrapper">
            <h1 className="servers__title">We Are Being Used By</h1>
            <div className="section__line"></div>
            <ul className="servers__list">
              {List.map((props, index) => (
                <li className="servers__card" key={index}>
                  <img src={props.img} alt="" className="servers__card-img" />
                  <span className="servers__card-content">
                    <h2 className="servers__card-title">{props.name}</h2>
                    <span className="servers__card-users">👦{props.users}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="servers__stats">
          <div className="container">
            <div className="server__stats-wrapper">
              <h2 className="servers__stats-title">Join us now!</h2>
              <div className="section__line"></div>
              <div className="server__stats-content">
                <div className="servers__stats-servers">
                  <h2>2M+</h2>
                  <span>Servers</span>
                </div>
                <div className="servers__stats-servers">
                  <h2>4M+</h2>
                  <span>Users</span>
                </div>
                <div className="servers__stats-servers">
                  <h2>60+</h2>
                  <span>Commands</span>
                </div>
              </div>
              <button className="btn">Add bot</button>
            </div>
            <div className="servers__stats-img">
              <img
                src="https://media.tenor.com/wE_qxJqpxj0AAAAd/nether-portal-minecraft.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servers;
