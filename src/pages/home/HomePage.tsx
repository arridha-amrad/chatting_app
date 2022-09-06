import { SearchInput } from "../../components/components.export";
import { Chat, Chats } from "../../features/features.export";
import "./homePage.style.css";

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
          <div className="chat_category">
            <i className="fas fa-comments"></i> all messages
          </div>
          <Chats />
        </div>
        <div className="chat_room">
          <Chat />
        </div>
        <div className="chat_detail"></div>
      </main>
      {/* <footer>
        <p>
          Created by <span>Arridha Amrad</span>
        </p>
      </footer> */}
    </section>
  );
};

export default Home;
