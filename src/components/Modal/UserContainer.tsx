/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';
import classes from './Modal.module.scss';
import { readingCardState } from '@/@recoil/readingCardState';

export function UserContainer() {
  const cards = useRecoilValue(readingCardState);
  return (
    <div className={classNames(classes.authorContainer, classes.userConatiner)}>
      <img src={cards[0]?.userImg} alt=" " className={classes['authorImg']} />
      <div className={classes['nicName']}>{cards[0]?.userName}</div>
    </div>
  );
}
