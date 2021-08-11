import { MdDateRange } from 'react-icons/md';

import { Container, Label, Content, Footer } from './style';

const Card = ({ teste, ...props }) => {
  console.log(teste);

  return (
    <Container {...props}>
      <header>
        <Label color="#7159c1">NICE</Label>
      </header>
      <Content>
        Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy
      </Content>
      <Footer>
        <div className="date">
          <MdDateRange size="24" />
          qua 4 de ago
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/26505634?v=4"
          alt="Alanderson Tomaiz"
        />
      </Footer>
    </Container>
  );
};

export default Card;
