import "./getRoom.css";
import {
  MessageCardForOthers,
  MessageCardForMe,
  MessageInput,
} from "../../components/components.export";
import RoomHeader from "./roomHeader/RoomHeader";
import { FC } from "react";

interface IProps {
  setIsShowHiddenRooms: (value: boolean) => void;
}

const GetRoom: FC<IProps> = ({ setIsShowHiddenRooms }) => {
  return (
    <div className="chatting-page-room">
      <div className="chatting-page-room__header">
        <RoomHeader setIsShowHiddenRooms={setIsShowHiddenRooms} />
      </div>
      <div className="chatting-page-room__body">
        <div className="chatting-page-room__time">
          <div className="chatting-page-room__time-divider" />
          <p>Today</p>
        </div>
        <div className="chatting-page-room__messages">
          <MessageCardForOthers />
          <MessageCardForMe />
          <MessageCardForOthers />
        </div>
      </div>
      <div className="chatting-page-room__form">
        <MessageInput />
      </div>
    </div>
  );
};

export default GetRoom;
