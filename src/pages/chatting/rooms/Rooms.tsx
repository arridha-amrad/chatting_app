import { FC } from "react";
import Tag from "../../../components/tag/Tag";
import {
  GetChats,
  SearchChat,
  GetPinnedChat,
} from "../../../features/features.export";
import "./rooms.css";

interface IProps {
  setIsOpen: (value: boolean) => void;
}

const Rooms: FC<IProps> = ({ setIsOpen }) => {
  return (
    <div className="chatting-page-rooms">
      <div className="chatting-page-rooms__header">
        <h1>Messages</h1>
        <button onClick={() => setIsOpen(true)}>
          <i className="fas fa-pen-to-square"></i>
        </button>
      </div>
      <div className="chatting-page-rooms__search">
        <SearchChat />
      </div>
      <Tag
        FAIconClassName="fas fa-thumbtack icon-rotate-45"
        label="Pinned Chat"
      />
      <div className="chatting-page-rooms__pinned-chat">
        <GetPinnedChat />
      </div>
      <Tag FAIconClassName="fas fa-comments" label="All Chats" />
      <div className="chatting-page-rooms__chats">
        <GetChats />
      </div>
    </div>
  );
};

export default Rooms;
