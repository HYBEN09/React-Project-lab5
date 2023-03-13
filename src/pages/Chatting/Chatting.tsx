import { Chat } from "@/components/ChatPage/Chat/Chat";
import { Sidebar } from "@/components/ChatPage/Sidebar/Sidebar";
import classes from "./Chatting.module.scss";

export default function ChattingPage() {
  return (
    <div className={classes.chat}>
      <div className={classes.container}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
