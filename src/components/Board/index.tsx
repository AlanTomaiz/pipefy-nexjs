import List from '../List';

import { Container } from './style';

// const fakeApi = loadLists() as IList[];

const Board = () => {
  return (
    <Container>
      <List />
      <List />
      <List />
    </Container>
  );
};

export default Board;
