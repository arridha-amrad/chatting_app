import "./chatInfo.css";
import ChatUser from "../../../images/chat_user2.jpg";
// images
import Image1 from "../../../images/bg_forgotPassword.jpg";
import Image2 from "../../../images/bg_login.jpg";
import Image3 from "../../../images/bg_signup.jpg";
import Image4 from "../../../images/bg.jpg";
import Image5 from "../../../images/main_ui.png";
import Tag from "../../../components/tag/Tag";

const ChatInfo = () => {
  const images = [Image1, Image2, Image3, Image4, Image5];
  return (
    <div className="chatting-page-chat-info">
      <div className="chatting-page-chat-info__user">
        <img
          className="chatting-page-chat-info__avatar"
          src={ChatUser}
          alt="avatar"
        />
        <h1 className="chatting-page-chat-info__username">Alexandra Patrova</h1>
      </div>
      <div className="chatting-page-chat-info__social-media">
        <button className="chatting-page-chat-info__btn-social-media">
          <i className="fab fa-twitter"></i>
          <p>@patrova_alx</p>
        </button>
        <button className="chatting-page-chat-info__btn-social-media">
          <i className="fab fa-instagram"></i>
          <p>@patrova_alx</p>
        </button>
        <button className="chatting-page-chat-info__btn-social-media">
          <i className="fab fa-tiktok"></i>
          <p>@patrova_alx</p>
        </button>
        <button className="chatting-page-chat-info__btn-social-media">
          <i className="fas fa-earth-asia"></i>
          <p>www.patrovaalexandra.com</p>
        </button>
      </div>
      <Tag FAIconClassName="fas fa-file-lines" label="Description" />
      <div className="chatting-page-chat-info__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
        pariatur? Lorem ipsum dolor sit. 😊😊
      </div>
      <Tag FAIconClassName="fas fa-image" label="Media" />
      <div className="chatting-page-chat-info__media">
        {images.map((image, index) => (
          <img
            className="chatting-page-chat-info__file-media"
            key={index}
            src={image}
            alt="media"
          />
        ))}
      </div>
    </div>
  );
};

export default ChatInfo;
