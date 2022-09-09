import { FC, useEffect, useState } from "react";
import { ChatItem, SearchInput } from "../../../components/components.export";
import "./chatInitDialog.css";

interface IProps {
  isOpen: boolean;
  closeDialog: VoidFunction;
}

const ChatInitDialog: FC<IProps> = ({ isOpen, closeDialog }) => {
  const [searchKey, setSearchKey] = useState("");

  const [isShowSearchResult, setIsShowSearchResult] = useState(false);

  useEffect(() => {
    if (searchKey === "") {
      setIsShowSearchResult(false);
    } else {
      setIsShowSearchResult(true);
    }
  }, [searchKey]);

  return (
    <div className={`${isOpen ? "show" : "hide"} chat_init_dialog`}>
      <button onClick={closeDialog} className="close_btn">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="content">
        <div className="content_relative">
          <div className="search_input">
            <SearchInput
              name="search"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
          {isShowSearchResult ? (
            <div className="search_result">
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
              <ChatItem type="notif" />
            </div>
          ) : (
            <>
              <div className="divider">
                <p>Or</p>
              </div>
              <button className="create_group_btn">
                <i className="fa-solid fa-user-group"></i>Create group
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInitDialog;
