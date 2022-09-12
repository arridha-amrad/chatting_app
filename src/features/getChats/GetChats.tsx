import { ChatItem } from "../../components/components.export";
import "./getChats.css";

const GetChats = () => {
  const pinnedChats = [1, 2, 3, 4, 5, 2, 2, 3, 4, 1, 2, 3, 4, 5];
  return (
    <div className="list_chats">
      {pinnedChats.map((_, i) => (
        <div key={i} className="chat_item">
          <ChatItem
            type={
              i % 2 === 0
                ? "notif"
                : i % 3 === 0
                ? "read"
                : i % 5 === 0
                ? "typing"
                : "unread"
            }
          />
          {i !== pinnedChats.length - 1 && <div className="chats_divider" />}
        </div>
      ))}
    </div>
  );
};

export default GetChats;
