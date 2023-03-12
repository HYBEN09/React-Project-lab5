import classes from "./Search.module.scss";

export const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes.searchForm}>
        <input type="text" placeholder="Find a user" />
      </div>
      <div className={classes.userChat}>
        <img
          src="https://avatars.githubusercontent.com/u/38703262?v=4"
          alt=""
        />
        <div className={classes.userChatInfo}>
          <span>김서현</span>
        </div>
      </div>
    </div>
  );
};
