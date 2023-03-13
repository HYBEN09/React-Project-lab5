import classes from "./Input.module.scss";
import Img from "../../assets/ImagePlaceholder.svg";
import Plane from "../../assets/paperPlane.svg";
export const Input = () => {
  return (
    <div className={classes.input}>
      <input type="text" placeholder="메시지를 입력하세요." />

      <div className={classes.send}>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="이미지 업로드" />
        </label>

        <button>
          <img src={Plane} alt="이미지 업로드" />
        </button>
      </div>
    </div>
  );
};
