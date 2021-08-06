import { useRef } from 'react';

import { MdDateRange } from 'react-icons/md';
import { useDnd } from '../../hooks/EasyDnd';

import { Container, Label, Content, Footer } from './style';

const Card = ({ data }) => {
  const ref = useRef();

  const { content, labels, user } = data;

  return (
    <Container draggable ref={ref}>
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
