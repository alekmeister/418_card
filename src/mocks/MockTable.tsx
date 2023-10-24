import { FC } from 'react';

const mockData: { key: number; data: string }[] = [];

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 10; i++) {
  mockData.push({
    key: i,
    data: `string number ${i}`,
  });
}

export const MockTable: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {mockData.map(({ key, data }) => (
        <span
          style={{
            borderBottom: '1px solid black',
            opacity: '0.4',
            padding: '5px 0',
          }}
          key={key}
        >
          {data}
        </span>
      ))}
    </div>
  );
};
