import classes from "./Chat.module.scss";
import avatar from "../../../assets/chatAvatar.svg";
import message from "../../../assets/chatMessage.svg";
export function Chat() {
  return (
    <div className={classes.chat}>
      <div className={classes.chatInfo}>
        <div className={classes.chatProfile}>
          <img
            src="https://avatars.githubusercontent.com/u/38703262?v=4"
            alt="사용자 프로필"
          />
          <span>김서현</span>
        </div>
        <div className={classes.chatIcons}>
          <img src={avatar} alt="사용자 페이지로 가기" />
          <img src={message} alt="메세지 창으로 가기" />
        </div>
      </div>
    </div>
  );
}
