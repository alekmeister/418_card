import React, { ComponentPropsWithoutRef, useContext } from 'react';

import { Card } from '../../ui/Card';

type CardProps = ComponentPropsWithoutRef<typeof Card>;

type CardContextProps<External extends object = {}> = External & {
  toggleCard(): void;
} & Pick<CardProps, 'id'>;

export const CardContext = React.createContext({});

export const useCardContext = <
  ExternalProps extends object,
>(): CardContextProps<ExternalProps> => useContext(CardContext as React.Context<any>);
