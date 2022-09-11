import './messageCard.style.css';
import ChatUser from '../../images/chat_user1.jpg';

const MessageCardForMe = () => {
  return (
    <div className="message_card message_card_right">
      <div className="chat_user chat_user_right">
        <div className="message_bubble_right">Let's get those things done!</div>
        <div className="username">
          <i className="fas fa-check message_status_delivery"></i>
          <span>9:12 AM</span> You
        </div>
      </div>
      <div className="avatar">
        <img src={ChatUser} alt="avatar" />
      </div>
    </div>
  );
};

export default MessageCardForMe;
