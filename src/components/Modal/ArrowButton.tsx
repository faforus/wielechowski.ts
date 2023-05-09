import React from 'react';
import classes from './Modal.module.css';

type ArrowButtonProps = {
  direction: 'prev' | 'next';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ArrowButton = React.memo(function ArrowButton({ direction, onClick }: ArrowButtonProps) {
  return (
    <button
      className={direction === 'prev' ? classes['prev-button'] : classes['next-button']}
      onClick={onClick}
    >
      {direction === 'prev' ? '‹' : '›'}
    </button>
  );
});

export default ArrowButton;
