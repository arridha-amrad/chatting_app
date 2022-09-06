import {
  GetChat,
  GetChats,
  SearchChat,
  DetailChat,
} from '../../features/features.export';

import './homePage.style.css';

const Home = () => {
  return (
    <section id="home_page">
      <main>
        <div className="messages">
          <div className="header">
            <h1>Messages</h1>
            <i className="fas fa-pen-to-square"></i>
          </div>
          <div className="search_container">
            <SearchChat />
          </div>
          <div className="chat_category">
            <i className="fas fa-comments"></i> all messages
          </div>
          <GetChats />
        </div>
        <div className="chat_room">
          <GetChat />
        </div>
        <div className="chat_detail">
          <DetailChat />
        </div>
      </main>
    </section>
  );
};

export default Home;
