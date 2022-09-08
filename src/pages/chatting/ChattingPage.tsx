import { useState } from 'react';
import Tag from '../../components/tag/Tag';

import {
  GetRoom,
  GetChats,
  SearchChat,
  DetailChat,
} from '../../features/features.export';
import GetPinnedChat from '../../features/getPinnedChat/GetPinnedChat';

import ChatInitDialog from './chatInitDialog/ChatInitDialog';

import './chattingPage.css';
import SideBar from './sidebar/Sidebar';

const ChattingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="chatting_page">
      <main className="chatting_page__main">
        <ChatInitDialog closeDialog={() => setIsOpen(false)} isOpen={isOpen} />
        {/* ONE */}
        <div className="chatting_page__sidebar">
          <SideBar />
        </div>
        {/* TWO */}
        <div className="chatting_page__rooms">
          <div className="chatting_page__rooms__header">
            <h1>Messages</h1>
            <button onClick={() => setIsOpen(true)}>
              <i className="fas fa-pen-to-square"></i>
            </button>
          </div>
          <div className="chatting_page__search">
            <SearchChat />
          </div>
          <Tag FAIconClassName="fas fa-thumbtack" label="Pinned Chat" />
          <div className="chatting_page__pinned_chat">
            <GetPinnedChat />
          </div>
          <Tag FAIconClassName="fas fa-comments" label="All Chats" />
          <div className="chatting_page__chats">
            <GetChats />
          </div>
        </div>
        {/* THREE */}
        <div className="chatting_page__room">
          <GetRoom />
        </div>
        {/* FOUR */}
        <div className="chatting_page__room_detail">
          <DetailChat />
        </div>
      </main>
    </section>
  );
};

export default ChattingPage;
