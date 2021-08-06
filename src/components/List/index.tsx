import { useRef } from 'react';
import { MdAdd } from 'react-icons/md';

import { useDnd } from '../../hooks/EasyDnd';
import { IList } from '../../interfaces/IList';

import Card from '../Card';

import { Container } from './style';

interface ListProps {
  data: IList;
}

const List: React.FC<ListProps> = ({ data }) => {
  const ref = useRef();

  const { title, creatable, cards } = data;

  return (
    <Container ref={ref}>
      <div className="list-header">
        <div className="title">
          <h2>{title}</h2>
          <div className="count">Total: {cards.length}</div>
        </div>

        {creatable && (
          <button type="button">
            <MdAdd size="24" color="#fff" />
          </button>
        )}
      </div>
      <ul>
        {cards.map(card => (
          <Card key={card.id} data={card} />
        ))}
      </ul>
    </Container>
  );
};

export default List;
