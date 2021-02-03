import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';


import Routes from './Routes/Routes'


function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>

  );
}

export default App;
