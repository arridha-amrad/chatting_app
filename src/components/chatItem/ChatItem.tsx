import { FC } from 'react';
import Avatar1 from '../../images/chat_user1.jpg';
import './chatItem.css';

interface IProps {
  type: 'read' | 'unread' | 'notif' | 'typing';
}

const ChatItem: FC<IProps> = ({ type }) => {
  return (
    <div className="chat-item">
      <div className="chat-item__user">
        <div className="chat-item__avatar">
          <img src={Avatar1} alt="avatar" />
        </div>
        <div className="chat-item__info">
          <h4 className="chat-item__username">Susan Doe</h4>
          {type === 'typing' ? (
            <div className="chat-item__typing">Typing...</div>
          ) : (
            <div className="chat-item__message">Hello World</div>
          )}
        </div>
      </div>
      <div className="chat-item__moment">
        <div className="time">14.30</div>
        <div className="chat_info">
          {type === 'read' && (
            <i className="fas fa-check message_read_indicator"></i>
          )}
          {type === 'unread' && (
            <i className="fas fa-check message_unread_indicator"></i>
          )}
          {type === 'notif' && <div className="chat_balloon">2</div>}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
