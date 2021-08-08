import { useEffect, useRef } from 'react';

import { MdDateRange } from 'react-icons/md';
import { useDrag } from '../../hooks/EasyDnd';

import { Container, Label, Content, Footer } from './style';

const Card = ({ data }) => {
  const { id, listIndex, content, labels, user } = data;

  const [, ref] = useDrag();
  // const ref = useRef();

  // useEffect(() => {
  //   register({
  //     item: { itemId: id, listIndex },
  //     ref: ref.current,
  //   });
  // }, [register, id, listIndex]);

  return (
    <Container ref={ref}>
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
