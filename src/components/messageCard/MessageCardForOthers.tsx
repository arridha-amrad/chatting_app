import "./messageCard.style.css";
import ChatUser from "../../images/chat_user2.jpg";

const MessageCard = () => {
  return (
    <div className="message_card">
      <div className="avatar">
        <img src={ChatUser} />
      </div>
      <div className="chat_user">
        <div className="message_bubble">Hi</div>
        <div className="message_bubble">Have a great working weeek!</div>
        <div className="message_bubble">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, ex
          amet exercitationem repudiandae atque illo error, officia, magni
          similique quibusdam recusandae sint laudantium? Inventore saepe
          corporis deleniti? Iure voluptates ab laboriosam sint totam sunt,
          molestias accusamus, consectetur autem et dolores odit, odio fugiat
          quod sapiente consequatur quasi quibusdam possimus quia? Recusandae
          tempore eveniet vero, itaque aliquid autem repellendus aperiam quod
          odit quasi, ad incidunt totam neque? Eaque quod similique possimus
          earum nulla at, atque maxime omnis voluptate. Nobis vel voluptatem
          illum reiciendis placeat quae sint. Numquam minima pariatur unde non,
          consequatur harum molestiae eveniet! Autem nemo error sit nihil
          reprehenderit.
        </div>
        <div className="username">
          Alexandra Patrova <span>9:12 AM</span>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
