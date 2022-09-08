import { ChatItem } from '../../components/components.export';
import './getPinnedChat.css';

const GetPinnedChat = () => {
  return (
    <div className="pinned_chat">
      <ChatItem type="read" />
    </div>
  );
};

export default GetPinnedChat;
