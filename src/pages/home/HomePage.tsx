import { ChatItem, SearchInput } from '../../components/components.export';
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
            <SearchInput />
          </div>
          <div className="pin_message_container">
            <p>
              <i className="fas fa-thumbtack"></i>PINNED
            </p>
            <ChatItem />
            <ChatItem />
            <ChatItem />
          </div>
        </div>
        <div className="chat_room"></div>
        <div className="chat_detail"></div>
      </main>
      <footer>
        <p>
          Created by <span>Arridha Amrad</span>
        </p>
      </footer>
    </section>
  );
};

export default Home;
