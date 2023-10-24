import React, { useEffect, useState } from 'react';

import styles from './Card.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { CardProvider } from 'shared/ui/Card/provider/ui/CardProvider';
import { CardHeader } from 'shared/ui/Card/ui/CardHeader/CardHeader';

type CardProps<P extends object = {}> = {
  id?: string;
  isOpen?: boolean;
  handleOpenCard?: ({ id, status }: { id: string | undefined; status: boolean }) => void;
  className?: string;
  bodyClassName?: string;
  footerClassName?: string;
  cardHeader?: React.ReactNode;
  cardBody?: React.ReactNode;
  cardFooter?: React.ReactNode;
  providedProps?: P;
};

export const Card = <ProvidedProps extends object>(props: CardProps<ProvidedProps>) => {
  const {
    id,
    cardFooter,
    cardHeader,
    cardBody,
    className = '',
    isOpen = false,
    handleOpenCard,
    bodyClassName = '',
    footerClassName = '',
    providedProps = {},
  } = props;

  const [isOpenCard, setOpenCard] = useState(isOpen);

  const toggleCard = (): void => {
    const updatedCardStatus = !isOpenCard;

    if (handleOpenCard) {
      const payload: Parameters<NonNullable<CardProps['handleOpenCard']>>[number] = {
        id,
        status: updatedCardStatus,
      };

      handleOpenCard(payload);
    }
    setOpenCard(updatedCardStatus);
  };

  useEffect(() => {
    setOpenCard(isOpen);
  }, [isOpen]);

  const mods = {
    [styles.body_hidden]: !isOpenCard,
  };

  const provided = { id, toggleCard, ...providedProps };

  return (
    <CardProvider value={provided}>
      <div id={id} className={classNames(styles.card, {}, [className])}>
        <CardHeader onToggleButton={toggleCard} isOpen={isOpenCard}>
          {cardHeader}
        </CardHeader>
        <div className={classNames(styles.body, mods, [bodyClassName])}>{cardBody}</div>
        <div className={classNames(styles.footer, {}, [footerClassName])}>
          {cardFooter}
        </div>
      </div>
    </CardProvider>
  );
};
