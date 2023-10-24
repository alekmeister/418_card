import { FC } from 'react';

import { Button } from 'shared/ui/Button/Button';
import { useCardContext } from 'shared/ui/Card/provider/context/cardContext';

export const MockFooter: FC = () => {
  const { cardName, toggleCard } = useCardContext<{ cardName: string }>();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <span>{cardName} - from card context </span>
      <Button onClick={toggleCard} style={{ border: '1px solid', padding: '5px' }}>
        Кнопка из провайдера переключения состояния карточки
      </Button>
    </div>
  );
};
