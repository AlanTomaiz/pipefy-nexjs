import { useState } from 'react';
import { IList } from '../../interfaces/IList';
import { loadLists } from '../../services/api';
import List from '../List';

import { Container } from './style';

const fakeApi = loadLists() as IList[];

const Board = () => {
  const [lists, setList] = useState<IList[]>([...fakeApi]);

  return (
    <Container>
      {lists.map((item, index) => {
        const aux = { ...item, index };

        return <List key={item.title} data={aux} />;
      })}
    </Container>
  );
};

export default Board;
