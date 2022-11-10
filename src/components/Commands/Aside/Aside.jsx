import React from "react";
import "../../../assets/styles/index.css";
import Header from "../../Layouts/Header/Header";

import { Logo } from "../../UI/Logo/Logo";
import "./Aside.css";
import Nav from "../../UI/Nav/Nav";

const Aside = () => {
  return (
    <div className="aside__component">
      <Header />
      <aside className="aside" data-aos="fade-right">
        <div className="aside__inner">
          <div className="aside__head">
            <Logo />
            <ul className="aside__list">
              <Nav />
            </ul>
          </div>
          <div className="aside__body">
            <h2 className="aside__title">Info Commands</h2>
            <span className="aside__command">+help</span>
            <span className="aside__command">+info</span>
            <span className="aside__command">+user</span>
            <span className="aside__command">+server</span>
            <span className="aside__command">+system</span>
            <span className="aside__command">+ping</span>
            <span className="aside__command">+role</span>
            <span className="aside__command">+avatar</span>
            <h2 className="aside__title">Music Commands</h2>
            <span className="aside__command">+join</span>
            <span className="aside__command">+leave</span>
            <span className="aside__command">+play</span>
            <span className="aside__command">+stop</span>
            <span className="aside__command">+queue</span>
            <h2 className="aside__title">Utilities</h2>
            <span className="aside__command">+clear</span>
            <span className="aside__command">+ticket</span>
            <span className="aside__command">+suggest</span>
            <h2 className="aside__title">Moderation</h2>
            <span className="aside__command">+kick</span>
            <span className="aside__command">+ban</span>
            <span className="aside__command">+mute</span>
            <span className="aside__command">+warn</span>
            <span className="aside__command">+remove-role</span>
            <span className="aside__command">+unwarn</span>
            <h2 className="aside__title">Leveling</h2>
            <span className="aside__command">+rank</span>
            <span className="aside__command">+set-level</span>
          </div>
        </div>
      </aside>
      <main className="aside__main" data-aos="fade-left">
        <div className="aside__main-inner">
          <h2>Info commands</h2>
          <div className="aside__main-command">
            <p>
              <span className="">+help</span> - Get commands list
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+info</span> - Get command infotmation
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+user</span> - Get user information
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+server</span> - Get information of server
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+system</span> - Get bot system information
            </p>
          </div>
          <h2>Music commands</h2>
          <div className="aside__main-command">
            <p>
              <span className="">+join</span> - Bot join to voice channel
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+leave</span> - Bot leave to voice channel
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+play</span> - Bot play music
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+stop</span> - Bot stop music
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+queue</span> - Add musics to queue
            </p>
          </div>
          <h2>Music commands</h2>
          <div className="aside__main-command">
            <p>
              <span className="">+join</span> - Bot join to voice channel
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+leave</span> - Bot leave to voice channel
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+play</span> - Bot play music
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+stop</span> - Bot stop music
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+queue</span> - Add musics to queue
            </p>
          </div>
          <h2>Utilities commands</h2>
          <div className="aside__main-command">
            <p>
              <span>+clear</span> - Clear mesagges
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+ticket</span> - Create support channel
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+suggest</span> - Send an idea in difinite channel
            </p>
          </div>
          <h2>Moderation commands</h2>
          <div className="aside__main-command">
            <p>
              <span>+kick</span> - kick from server difinite member
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+ban</span> - ban member
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+mute</span> - mute member
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+warn</span> - warn member.U can set max warns
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+remove-role</span> - remove role from someone
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+unwarn</span> - remove warns from someone
            </p>
          </div>
          <h2>Leveling commands</h2>
          <div className="aside__main-command">
            <p>
              <span>+rank</span> - get someone rank
            </p>
          </div>
          <div className="aside__main-command">
            <p>
              <span>+set-level</span> - set level
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Aside;
