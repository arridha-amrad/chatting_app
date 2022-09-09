import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/login")}
      className="chatting-page-sidebar__menu-button"
    >
      <i className="fa fa-sign-out"></i>
      <div className="chatting-page-sidebar__tooltip">Logout</div>
    </button>
  );
};

export default Logout;
