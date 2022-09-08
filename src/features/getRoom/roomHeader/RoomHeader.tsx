import ImageUser from '../../../images/chat_user2.jpg';
import './roomHeader.css';

const RoomHeader = () => {
  return (
    <div className="room-header">
      <button className="room-header__drawer_btn">
        <i className="fas fa-bars"></i>
      </button>
      <div className="room-header__user">
        <div className="room-header__avatar">
          <img src={ImageUser} alt="avatar" />
        </div>
        <div className="room-header__user-info">
          <h3 className="room-header__username">Alexandra Patrova</h3>
          <p className="room-header__last-seen">last seen today at 19.20</p>
        </div>
      </div>
      <button className="room-header__pinned_btn">
        <i className="fas fa-thumbtack"></i>
      </button>
    </div>
  );
};

export default RoomHeader;
