import { useState } from 'react';
import { IList } from '../../interfaces/IList';
import { loadLists } from '../../services/api';
import List from '../List';

import { Container } from './style';

const fakeApi = loadLists();

const Board = () => {
  const [lists, setList] = useState<IList[]>([...fakeApi]);

  return (
    <Container>
      {lists.map(item => (
        <List key={item.title} data={item} />
      ))}
    </Container>
  );
};

export default Board;
