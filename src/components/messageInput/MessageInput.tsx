import "./messageInput.css";

const MessageInput = () => {
  return (
    <div className="message_input">
      <textarea placeholder="Your message..."></textarea>
      <div className="message_options">
        <button>
          <i className="fas fa-microphone-lines"></i>
        </button>
        <button>
          <i className="fas fa-paper-plane"></i>
        </button>
        <button>
          <i className="fas fa-paperclip"></i>
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
