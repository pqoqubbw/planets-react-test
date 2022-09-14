import React from 'react';
import clsx from 'classnames';

import { Moon } from '../../data';

import styles from './Moons.module.css';

interface Props {
  moon: Moon;
  handleSelect: () => void;
  isSelected?: boolean;
}

const Moons = ({ handleSelect, moon, isSelected = false }: Props) => {
  const moonStyles = clsx(styles.moonItem, { [styles.active]: isSelected });

  return (
    <div className={moonStyles} onClick={handleSelect}>
      {moon.title}
    </div>
  );
};

export default Moons;
