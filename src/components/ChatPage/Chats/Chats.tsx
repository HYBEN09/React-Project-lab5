import classes from "./Chats.module.scss";

export const Chats = () => {
  return (
    <div className={classes.chats}>
      <div className={classes.userChat}>
        <img
          src="https://avatars.githubusercontent.com/u/38703262?v=4"
          alt=""
        />
        <div className={classes.userChatInfo}>
          <span>김서현</span>
          <p>서울 강서구 모집중입니다~!</p>
        </div>
      </div>

      <div className={classes.userChat}>
        <img
          src="https://avatars.githubusercontent.com/u/89835647?v=4"
          alt=""
        />
        <div className={classes.userChatInfo}>
          <span>김대웅</span>
          <p>서울 송파구 모집중입니다~!</p>
        </div>
      </div>

      <div className={classes.userChat}>
        <img
          src="https://avatars.githubusercontent.com/u/119389337?v=4"
          alt=""
        />
        <div className={classes.userChatInfo}>
          <span>빈운기</span>
          <p>서울 금천구 모집중입니다~!</p>
        </div>
      </div>

      <div className={classes.userChat}>
        <img
          src="https://avatars.githubusercontent.com/u/78182200?v=4"
          alt=""
        />
        <div className={classes.userChatInfo}>
          <span>원다함</span>
          <p>서울 성동구 모집중입니다~!</p>
        </div>
      </div>
    </div>
  );
};
