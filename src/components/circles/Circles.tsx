import React from 'react';

import styles from './Circles.module.css';

interface Props {
  circlesCount: number;
}

const Circles = ({ circlesCount }: Props) => {
  return (
    <>
      {Array.from<number>({ length: circlesCount }).map((item, index) => (
        <span className={styles.circle} key={item} style={{ padding: `${index * 5 + 5}px` }} />
      ))}
    </>
  );
};

export default Circles;
