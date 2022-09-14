import React from 'react';
import Circles from '../circles/Circles';

import styles from './Planet.module.css';

interface Props {
  title: string;
  selectedCounter: number | null;
}

const Planet = ({ title, selectedCounter }: Props) => {
  return (
    <React.Fragment>
      <div className={styles.planet}>
        {selectedCounter && <Circles circlesCount={selectedCounter} />}
        {title} {selectedCounter}
      </div>
    </React.Fragment>
  );
};

export default Planet;
