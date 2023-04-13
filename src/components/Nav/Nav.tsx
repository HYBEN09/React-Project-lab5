import classes from './Nav.module.scss';
import { useRecoilState } from 'recoil';
import { NavLink } from 'react-router-dom';
import close from '/public/assets/close.svg';
import { isActive } from '@/@recoil/isActive';
import hamburgerBtn from '/public/assets/hamburger.svg';
interface Props {
  onClick: () => void;
}

export function Nav({ onClick }: Props): JSX.Element {
  const [active, setActive] = useRecoilState(isActive);

  return (
    <div>
      <nav
        className={active ? classes.open : classes.nav}
        onMouseLeave={() => setActive(false)}
      >
        <ul>
          <li>
            <NavLink to="/mainPage">홈</NavLink>
          </li>
          <li>
            <NavLink to="/recommend">추천</NavLink>
          </li>
          <li>
            <NavLink to="/chat">채팅</NavLink>
          </li>
          <li>
            <NavLink to="/myPage">
              <span>마이</span>페이지
            </NavLink>
          </li>
        </ul>
        <button
          type="button"
          className={active ? null : classes.closeHidden}
          onClick={() => setActive(false)}
        >
          <img className={classes.closeImg} src={close} alt="메뉴닫기" />
        </button>
      </nav>
      <div className={active ? classes.nav : classes.hamburger}>
        <button type="button" onClick={onClick}>
          <img src={hamburgerBtn} alt="메뉴열기" />
        </button>
      </div>
    </div>
  );
}
