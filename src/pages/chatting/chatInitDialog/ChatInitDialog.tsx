import { FC, useEffect, useState } from 'react';
import { ChatItem, SearchInput } from '../../../components/components.export';
import './chatInitDialog.css';

interface IProps {
  isOpen: boolean;
  closeDialog: VoidFunction;
}

const ChatInitDialog: FC<IProps> = ({ isOpen, closeDialog }) => {
  const [searchKey, setSearchKey] = useState('');

  const [isShowSearchResult, setIsShowSearchResult] = useState(false);

  useEffect(() => {
    if (searchKey === '') {
      setIsShowSearchResult(false);
    } else {
      setIsShowSearchResult(true);
    }
  }, [searchKey]);

  return (
    <div
      className={`${
        isOpen ? 'chat-init-dialog--show' : 'chat-init-dialog--hide'
      } chat-init-dialog`}
    >
      <button onClick={closeDialog} className="chat-init-dialog__close-btn">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="chat-init-dialog__content">
        <div className="chat-init-dialog__content-relative">
          <div className="chat-init-dialog__search">
            <SearchInput
              name="search"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </div>
          {isShowSearchResult ? (
            <div className="chat-init-dialog__search-result">
              <div className="chat-init-dialog__result-item">
                <ChatItem type="notif" />
              </div>
              <div className="chat-init-dialog__result-item">
                <ChatItem type="notif" />
              </div>
              <div className="chat-init-dialog__result-item">
                <ChatItem type="notif" />
              </div>
              <div className="chat-init-dialog__result-item">
                <ChatItem type="notif" />
              </div>
            </div>
          ) : (
            <>
              <div className="chat-init-dialog__divider">
                <p>Or</p>
              </div>
              <button className="chat-init-dialog__btn-create-group">
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
