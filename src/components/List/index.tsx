import { MdAdd } from 'react-icons/md';

import Card from '../Card';

import { Container } from './style';

const List = ({ data }) => {
  const { title, creatable, cards } = data;

  return (
    <Container>
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
