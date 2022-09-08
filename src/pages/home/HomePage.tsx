import { useState } from "react";

import {
  GetChat,
  GetChats,
  SearchChat,
  DetailChat,
  CreateMessage,
} from "../../features/features.export";
import Logout from "../../features/logout/Logout";
import User from "../../images/chat_user1.jpg";

import ChatInitDialog from "./chatInitDialog/ChatInitDialog";

import "./homePage.style.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="home_page">
      <main>
        <ChatInitDialog closeDialog={() => setIsOpen(false)} isOpen={isOpen} />
        <div className="sidebar">
          <div className="avatar">
            <img src={User} alt="avatar" />
          </div>
          <div className="main_menu">
            <button className="sidebar_menu_button">
              <i className="fas fa-comment-dots"></i>
              <div className="tooltip">Chats</div>
            </button>
            <button className="sidebar_menu_button">
              <i className="fas fa-user"></i>
              <div className="tooltip">Profile</div>
            </button>
          </div>
          <div className="other_menu">
            <Logout />
          </div>
        </div>
        <div className="messages">
          <CreateMessage setIsOpen={() => setIsOpen(true)} />
          <div className="search_container">
            <SearchChat />
          </div>
          <div className="chat_category">
            <i className="fas fa-comments"></i> all messages
          </div>
          <GetChats />
        </div>
        <div className="chat_room">
          <GetChat />
        </div>
        <div className="chat_detail">
          <DetailChat />
        </div>
      </main>
    </section>
  );
};

export default Home;
