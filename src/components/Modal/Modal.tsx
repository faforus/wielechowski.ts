import React, { useEffect, useRef } from 'react';
import classes from './Modal.module.css';
import Spinner from '../Spinner';
import { useNavigate } from 'react-router-dom';
import ArrowButton from './ArrowButton';
import CloseButton from './CloseButton';
import classNames from 'classnames';
import { isMobileChecker } from '../../helpers/isMobile';

type ModalProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  tempImgSrc: string;
  setTempImgSrc: React.Dispatch<React.SetStateAction<string>>;
  setCurrentIndex?: React.Dispatch<React.SetStateAction<number>>;
  largeImgIsLoading: boolean;
  handleLargeImageLoad: () => void;
  handlePrevClick: () => void;
  handleNextClick: () => void;
};

const Modal = (props: ModalProps) => {
  const isMobile = isMobileChecker();

  const {
    modal,
    setModal,
    tempImgSrc,
    setTempImgSrc,
    largeImgIsLoading,
    handleLargeImageLoad,
    handlePrevClick,
    handleNextClick,
  } = props;

  const imgRef = useRef<HTMLImageElement | null>(null);

  const navigate = useNavigate();

  const debounce = <F extends (...args: Parameters<F>) => void>(func: F, wait: number) => {
    let timeout: NodeJS.Timeout | null = null;
    return (...args: Parameters<F>): void => {
      const later = () => {
        timeout = null;
        func(...args);
      };
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(later, wait);
    };
  };

  const debouncedHandlePrevClick = debounce(handlePrevClick, 200);
  const debouncedHandleNextClick = debounce(handleNextClick, 200);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Backspace') {
        navigate('/galeria');
        window.scrollTo(0, 0);
      }
      if (imgRef.current !== null && e.key === 'ArrowLeft') {
        imgRef.current.style.opacity = '0';
        setTimeout(() => {
          debouncedHandlePrevClick();
        }, 150);
      } else if (imgRef.current !== null && e.key === 'ArrowRight') {
        imgRef.current.style.opacity = '0';
        setTimeout(() => {
          debouncedHandleNextClick();
        }, 150);
      } else if (imgRef.current !== null && e.key === 'Escape') {
        setModal(false);
        setTempImgSrc('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    if (!isMobile) {
      if (modal) {
        document.documentElement.style.overflowY = 'hidden';
        document.body.style.width = 'calc(100% - 6px)';
      } else {
        document.documentElement.style.overflowY = 'scroll';
        document.body.style.width = '100%';
      }
    }

    if (modal && isMobile) {
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
    }

    return () => {
      document.documentElement.style.overflowY = 'scroll';
      document.body.style.width = '100%';
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [modal]);

  return (
    <div
      className={classNames(classes.modal, {
        [classes.open]: modal,
        [classes['disable-select']]: modal,
      })}
      onClick={() => {
        setModal(false);
        setTimeout(() => {
          setTempImgSrc('');
        }, 150);
      }}
    >
      <CloseButton
        onClick={() => {
          setModal(false);
          setTimeout(() => {
            setTempImgSrc('');
          }, 150);
        }}
      />
      <ArrowButton
        direction='prev'
        onClick={(e) => {
          e.stopPropagation();
          if (imgRef.current) {
            imgRef.current.style.opacity = '0';
            setTimeout(() => {
              debouncedHandlePrevClick();
            }, 150);
          }
        }}
      />
      <ArrowButton
        direction='next'
        onClick={(e) => {
          e.stopPropagation();
          if (imgRef.current) {
            imgRef.current.style.opacity = '0';
            setTimeout(() => {
              debouncedHandleNextClick();
            }, 150);
          }
        }}
      />
      {largeImgIsLoading && (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
      <img
        ref={imgRef}
        key={tempImgSrc}
        alt={(typeof tempImgSrc === 'string' ? tempImgSrc : '')
          .replace(/%20/g, ' ')
          .replace('/static/media/', '')
          .replace(/\..*$/, '')
          .slice(1)}
        src={tempImgSrc}
        onLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.style.opacity = '1';
          handleLargeImageLoad();
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </div>
  );
};

export default Modal;
