import './getChat.style.css';
import ChatUser from '../../images/chat_user2.jpg';
import {
  MessageCardForOthers,
  MessageCardForMe,
  MessageInput,
} from '../../components/components.export';

const GetChat = () => {
  return (
    <div className="get_chat">
      <div className="chat_header">
        <div className="avatar">
          <img src={ChatUser} alt="avatar" />
        </div>
        <div className="user_info">
          <div className="username">Alexandra Patrova</div>
          <div className="last_seen">last seen today at 19.20</div>
        </div>
        <div className="chat_via">
          <i className="fas fa-message"></i>
          <i className="fas fa-phone"></i>
          <i className="fas fa-video"></i>
        </div>
      </div>
      <div className="chat_messages">
        <div className="time_wrapper">
          <div className="divider" />
          <p>Today</p>
        </div>
        <div className="list_messages">
          <MessageCardForOthers />
          <MessageCardForMe />
          <MessageCardForOthers />
        </div>
      </div>
      <div className="chat_composer">
        <MessageInput />
      </div>
    </div>
  );
};

export default GetChat;
