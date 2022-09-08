import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/login")} className="sidebar_menu_button">
      <i className="fa fa-sign-out"></i>
      <div className="tooltip">Logout</div>
    </button>
  );
};

export default Logout;
