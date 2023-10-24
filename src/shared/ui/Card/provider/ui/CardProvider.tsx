import { ReactNode } from 'react';

import { CardContext } from '../context/cardContext';

type CardProviderProps<P extends object = {}> = {
  children: ReactNode;
  value: P;
};
export const CardProvider = <P extends object = {}>({
  children,
  value,
}: CardProviderProps<P>) => {
  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
