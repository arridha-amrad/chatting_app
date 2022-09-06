import { FC } from "react";
import Avatar1 from "../../images/chat_user1.jpg";
import "./chatItem.style.css";

interface IProps {
  type: "read" | "unread" | "notif" | "typing";
}

const ChatItem: FC<IProps> = ({ type }) => {
  return (
    <div className="chat_item_container">
      <div className="chat_user">
        <div className="left">
          <img src={Avatar1} alt="avatar" />
        </div>
        <div className="right">
          <h4 className="username">Susan Doe</h4>
          {type === "typing" ? (
            <div className="chat_typing">Typing...</div>
          ) : (
            <div className="message">Hello World</div>
          )}
        </div>
      </div>
      <div className="chat_moment">
        <div className="time">14.30</div>
        <div className="chat_info">
          {type === "read" && (
            <i className="fas fa-check message_read_indicator"></i>
          )}
          {type === "unread" && (
            <i className="fas fa-check message_unread_indicator"></i>
          )}
          {type === "notif" && <div className="chat_ballon">2</div>}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
