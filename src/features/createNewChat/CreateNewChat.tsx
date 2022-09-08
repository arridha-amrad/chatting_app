import { FC } from 'react';
import './createNewChat.style.css';

interface IProps {
  setIsOpen: VoidFunction;
}

const CreateNewChat: FC<IProps> = ({ setIsOpen }) => {
  return (
    <div className="create_new_chat">
      <h1>Messages</h1>
      <button onClick={setIsOpen} className="btn_menu">
        <i className="fas fa-pen-to-square"></i>
      </button>
    </div>
  );
};

export default CreateNewChat;
