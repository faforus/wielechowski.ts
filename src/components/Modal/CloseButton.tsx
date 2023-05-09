import React from 'react';
import classes from './Modal.module.css';

type CloseButtonProps = {
  onClick: React.MouseEventHandler<HTMLSpanElement>;
};

const CloseButton = React.memo(function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <span onClick={onClick} className={classes['close-button']}>
      {'×'}
    </span>
  );
});

export default CloseButton;
