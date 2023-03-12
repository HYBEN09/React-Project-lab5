import classes from "./Navbar.module.scss";
export function Navbar() {
  return (
    <div className={classes.navbar}>
      <p className={classes.logo}>슬기로운 N밥생활</p>
      <div className={classes.user}>
        <img
          src="https://avatars.githubusercontent.com/u/104710243?v=4"
          alt="사용자"
        />
        <span>변혜빈</span>
        <button type="button">로그아웃</button>
      </div>
    </div>
  );
}
