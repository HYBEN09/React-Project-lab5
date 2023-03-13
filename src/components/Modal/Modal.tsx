/* modal.tsx */

import classes from "./Modal.module.scss";
import close from "@/assets/close.svg";

export default function Modal() {
  return (
    <div className={classes["modal-wrap"]}>
      <div className={classes["modal-top"]}>
        <button
          type="button"
          aria-label="닫기버튼"
          className={classes["close"]}
        >
          <img className={classes.img} src={close} alt="닫기 버튼" />
        </button>
      </div>
    </div>
  );
}