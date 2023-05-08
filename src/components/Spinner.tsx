import React from 'react';
import classes from './Spinner.module.css';

interface SpinnerProps {
  maxHeight?: string;
}

const Spinner = (props: SpinnerProps) => {
  return (
    <div style={{ maxHeight: props.maxHeight }} className={classes['spinner-container']}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Spinner;
