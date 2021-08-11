import { MdAdd } from 'react-icons/md';
import { useDrop } from '../../hooks/EasyDnd';

import Card from '../Card';

import { Container } from './style';

const List = () => {
  const dropRef = useDrop();

  return (
    <Container ref={dropRef}>
      <div className="list-header">
        <div className="title">
          <h2>Tarefas</h2>
          <div className="count">Total: 5</div>
        </div>

        <button type="button">
          <MdAdd size="24" color="#fff" />
        </button>
      </div>
      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </Container>
  );
};

export default List;
