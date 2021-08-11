import { MdAdd } from 'react-icons/md';
import { Draggable } from '../../hooks/EasyDnd';

import Card from '../Card';

import { Container } from './style';

const List = () => {
  return (
    <Container>
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
        <Draggable>{props => <Card {...props} />}</Draggable>
      </ul>
    </Container>
  );
};

export default List;
