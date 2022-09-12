import { FC } from "react";
import "./createNewChat.css";

interface IProps {
  setIsOpen: VoidFunction;
}

const CreateNewChat: FC<IProps> = ({ setIsOpen }) => {
  return (
    <div className="create-new-chat">
      <h1 className="create-new-chat__title">Messages</h1>
      <button onClick={setIsOpen} className="create-new-chat__btn-menu">
        <i className="fas fa-pen-to-square"></i>
      </button>
    </div>
  );
};

export default CreateNewChat;
