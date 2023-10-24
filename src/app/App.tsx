import { ComponentProps, FC, useState } from 'react';

import './styles/index.scss';
import { MockFooter } from 'mocks/MockFooter';
import { MockHeader } from 'mocks/MockHeader';
import { MockTable } from 'mocks/MockTable';
import { Card } from 'shared/ui/Card/ui/Card';
import { Container } from 'shared/ui/Container/Container';

type CardProps = ComponentProps<typeof Card>;

export const App: FC = () => {
  const [isOpenCard, setOpenCard] = useState(false);
  const handleOpenCard: CardProps['handleOpenCard'] = ({ status }): void => {
    setOpenCard(status);
  };

  return (
    <div className="app">
      <Container className="app_container">
        <Card
          id="mockCard"
          isOpen={isOpenCard}
          handleOpenCard={handleOpenCard}
          cardHeader={<MockHeader />}
          cardBody={<MockTable />}
          cardFooter={<MockFooter />}
          providedProps={{ cardName: 'Animals' }} // Можно прокидывать любой объект, и потом достать с помощью хука useCardContext
        />
      </Container>
    </div>
  );
};
