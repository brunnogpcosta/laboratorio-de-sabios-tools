
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

import HomePage from './Pages/HomePage/HomePage';
import Populares from './Pages/Populares/Populares'
import Baratos from './Pages/Baratos/Baratos';
import Pesquisa from './Pages/Pesquisa/Pesquisa'
import Trilha from './Pages/Trilha/Trilha'
import TrilhaChoice from './Pages/Trilha/TrilhaChoice'
import Ranking from './Pages/Ranking/Ranking'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
