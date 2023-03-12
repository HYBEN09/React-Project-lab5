import { Chats } from "../Chats/Chats";
import { Search } from "../Search/Search";
import { Navbar } from "../Navbar/Navbar";
import classes from "./Sidebar.module.scss";
export function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
}
