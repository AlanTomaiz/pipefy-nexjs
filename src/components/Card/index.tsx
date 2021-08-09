import { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { useDrag } from '../../hooks/EasyDnd';

import { Container, Label, Content, Footer } from './style';

const Card = ({ data }) => {
  const { id, listIndex, content, labels, user } = data;
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useDrag({
    item: { card_id: id, list_id: listIndex },
    collect: ({ isDragging: dragger }) => setIsDragging(dragger),
  });

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {labels.map(label => (
          <Label key={label.title} color={label.color}>
            {label.title}
          </Label>
        ))}
      </header>
      <Content>{content}</Content>
      <Footer>
        <div className="date">
          <MdDateRange size="24" />
          qua 4 de ago
        </div>
        {user && <img src={user} alt="Alanderson Tomaiz" />}
      </Footer>
    </Container>
  );
};

export default Card;
