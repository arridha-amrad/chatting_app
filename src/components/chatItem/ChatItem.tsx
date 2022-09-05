import Avatar1 from '../../images/chat_user1.jpg';
import './chatItem.style.css';

const ChatItem = () => {
  return (
    <div className="chat_item_container">
      <div className="chat_user">
        <div className="left">
          <img src={Avatar1} alt="avatar" />
        </div>
        <div className="right">
          <h4>Susan Doe</h4>
          <p>Hello World</p>
        </div>
      </div>
      <div className="chat_moment">
        <p>14.30</p>
        <div className="unread_chat"></div>
      </div>
    </div>
  );
};

export default ChatItem;
