import './chatInfo.style.css';
import ChatUser from '../../images/chat_user2.jpg';
// images
import Image1 from '../../images/bg_forgotPassword.jpg';
import Image2 from '../../images/bg_login.jpg';
import Image3 from '../../images/bg_signup.jpg';
import Image4 from '../../images/bg.jpg';
import Image5 from '../../images/main_ui.png';

const ChatInfo = () => {
  const images = [Image1, Image2, Image3, Image4, Image5];
  return (
    <div className="chat_info">
      <div className="chat_user">
        <img src={ChatUser} alt="avatar" />
        <h1>Alexandra Patrova</h1>
      </div>
      <div className="social_media">
        <button>
          <i className="fab fa-twitter"></i>
          <p>@patrova_alx</p>
        </button>
        <button>
          <i className="fab fa-instagram"></i>
          <p>@patrova_alx</p>
        </button>
        <button>
          <i className="fab fa-tiktok"></i>
          <p>@patrova_alx</p>
        </button>
        <button>
          <i className="fas fa-earth-asia"></i>
          <p>www.patrovaalexandra.com</p>
        </button>
      </div>
      <div className="info_category">
        <i className="fas fa-file-lines"></i> Description
      </div>
      <div className="description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
        pariatur? Lorem ipsum dolor sit. 😊😊
      </div>
      <div className="info_category">
        <i className="fas fa-image"></i> Media
      </div>
      <div className="media">
        {images.map((image, index) => (
          <img key={index} src={image} alt="media" />
        ))}
      </div>
    </div>
  );
};

export default ChatInfo;
