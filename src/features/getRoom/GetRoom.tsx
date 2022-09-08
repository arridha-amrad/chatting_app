import './getRoom.css';
import {
  MessageCardForOthers,
  MessageCardForMe,
  MessageInput,
} from '../../components/components.export';
import RoomHeader from './roomHeader/RoomHeader';

const GetRoom = () => {
  return (
    <div className="room">
      <div className="room__header">
        <RoomHeader />
      </div>
      <div className="room__body">
        <div className="room__time">
          <div className="room__time__divider" />
          <p>Today</p>
        </div>
        <div className="room__messages">
          <MessageCardForOthers />
          <MessageCardForMe />
          <MessageCardForOthers />
        </div>
      </div>
      <div className="room__form">
        <MessageInput />
      </div>
    </div>
  );
};

export default GetRoom;
