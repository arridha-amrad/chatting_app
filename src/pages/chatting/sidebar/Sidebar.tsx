import { Logout } from "../../../features/features.export";
import User from "../../../images/chat_user2.jpg";
import "./sidebar.style.css";

const SideBar = () => {
  return (
    <div className="chatting-page-sidebar">
      <div className="chatting-page-sidebar__avatar">
        <img src={User} alt="avatar" />
      </div>
      <div className="chatting-page-sidebar__menu">
        <button className="chatting-page-sidebar__menu-button">
          <i className="fas fa-comment-dots"></i>
          <div className="chatting-page-sidebar__tooltip">Chats</div>
        </button>
        <button className="chatting-page-sidebar__menu-button">
          <i className="fas fa-user"></i>
          <div className="chatting-page-sidebar__tooltip">Profile</div>
        </button>
      </div>
      <div className="chatting-page-sidebar__other-menu">
        <Logout />
      </div>
    </div>
  );
};

export default SideBar;
