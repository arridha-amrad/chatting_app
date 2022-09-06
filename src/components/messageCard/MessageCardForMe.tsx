import "./messageCard.style.css";
import ChatUser from "../../images/chat_user1.jpg";

const MessageCardForMe = () => {
  return (
    <div className="message_card message_card_right">
      <div className="chat_user chat_user_right">
        <div className="username">
          <span>9:12 AM</span> You
        </div>
        <div className="message_bubble_right message_bubble_far">
          I'm so excited!
        </div>
        <div className="message_bubble_right message_bubble_close">
          Let's get those things done!
        </div>
      </div>
      <div className="avatar">
        <img src={ChatUser} />
      </div>
    </div>
  );
};

export default MessageCardForMe;
