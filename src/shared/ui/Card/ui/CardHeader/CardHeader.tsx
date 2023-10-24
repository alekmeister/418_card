import React, { FC } from 'react';

import DownArrow from 'shared/assets/icons/down-arrow.svg?react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import styles from 'shared/ui/Card/ui/CardHeader/CardHeader.module.scss';

interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
  onToggleButton: () => void;
  isOpen: boolean;
}

export const CardHeader: FC<HeaderProps> = (props) => {
  const { className, children, onToggleButton, isOpen } = props;

  return (
    <div className={classNames(styles.header, {}, [className ?? ''])}>
      <Button className={styles.collapse_btn} onClick={onToggleButton}>
        <DownArrow
          className={classNames(styles.btn_icon, {}, [
            isOpen ? styles.default_position : styles.rotated,
          ])}
          width="20px"
          height="20px"
        />
      </Button>
      {children}
    </div>
  );
};
