import { useRef } from 'react';
import { MdAdd } from 'react-icons/md';

import { IList } from '../../interfaces/IList';
import Card from '../Card';

import { Container } from './style';

const List = ({ data }) => {
  const ref = useRef();
  const { index: listIndex, title, creatable, cards } = data as IList;

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
        {cards.map(card => {
          const aux = { ...card, listIndex };

          return <Card key={card.id} data={aux} />;
        })}
      </ul>
    </Container>
  );
};

export default List;
