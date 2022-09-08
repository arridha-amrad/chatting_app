import ImageUser from '../../../images/chat_user2.jpg';
import './chatUser.style.css';

const ChatUser = () => {
  return (
    <div className="chat__user">
      <div className="chat__user--avatar">
        <img src={ImageUser} alt="avatar" />
      </div>
      <div className="chat__user--user_info">
        <h3>Alexandra Patrova</h3>
        <p className="last_seen">last seen today at 19.20</p>
      </div>
    </div>
  );
};

export default ChatUser;
