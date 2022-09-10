import { FC } from "react";
import Rooms from "../rooms/Rooms";
import "./hiddenRooms.css";

interface IProps {
  setIsOpen: (value: boolean) => void;
  setIsShowHiddenRooms: VoidFunction;
  isShowHiddenRooms: boolean;
}

const HiddenRooms: FC<IProps> = ({
  setIsOpen,
  setIsShowHiddenRooms,
  isShowHiddenRooms,
}) => {
  return (
    <div
      className={`hidden-rooms ${
        isShowHiddenRooms ? "hidden-rooms--block" : "hidden-rooms--hide"
      }`}
    >
      <button
        onClick={setIsShowHiddenRooms}
        className="hidden-rooms__close-btn"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="hiddem-rooms__container">
        <Rooms setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default HiddenRooms;
