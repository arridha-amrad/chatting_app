import { useState } from "react";
import { GetRoom } from "../../features/features.export";
import ChatInfo from "./chatInfo/ChatInfo";
import ChatInitDialog from "./chatInitDialog/ChatInitDialog";

import "./chattingPage.css";
import HiddenRooms from "./hiddenRooms/HiddenRooms";
import Rooms from "./rooms/Rooms";
import SideBar from "./sidebar/Sidebar";

const ChattingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowHiddenRooms, setIsShowHiddenRooms] = useState(false);

  return (
    <section id="chatting-page">
      <main className="chatting-page__main">
        <ChatInitDialog closeDialog={() => setIsOpen(false)} isOpen={isOpen} />
        <HiddenRooms
          isShowHiddenRooms={isShowHiddenRooms}
          setIsShowHiddenRooms={() => setIsShowHiddenRooms(false)}
          setIsOpen={setIsOpen}
        />
        <div className="chatting-page__sidebar">
          <SideBar />
        </div>
        <div className="chatting-page__rooms">
          <Rooms setIsOpen={setIsOpen} />
        </div>
        <div className="chatting-page__room">
          <GetRoom setIsShowHiddenRooms={setIsShowHiddenRooms} />
        </div>
        <div className="chatting-page__room_detail">
          <ChatInfo />
        </div>
      </main>
    </section>
  );
};

export default ChattingPage;
