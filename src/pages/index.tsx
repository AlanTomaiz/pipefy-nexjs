import { DndProvider } from '../hooks/EasyDnd';

import Header from '../components/Header';
import Board from '../components/Board';

const Home = () => {
  return (
    <DndProvider>
      <Header />
      <Board />
    </DndProvider>
  );
};

export default Home;
