import { Logout } from '../../../features/features.export';
import User from '../../../images/chat_user2.jpg';
import './sidebar.style.css';

const SideBar = () => {
  return (
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
  );
};

export default SideBar;
