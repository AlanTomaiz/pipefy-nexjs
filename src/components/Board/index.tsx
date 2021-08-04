import { loadLists } from '../../services/api';
import List from '../List';

import { Container } from './style';

const lists = loadLists();

const Board = () => {
  return (
    <Container>
      {lists.map(item => (
        <List key={item.title} data={item} />
      ))}
    </Container>
  );
};

export default Board;
