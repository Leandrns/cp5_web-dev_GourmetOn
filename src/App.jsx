import './App.css';
import { Apresentacao } from './components/Apresentacao/Apresentacao';
import { Depoimentos } from './components/Depoimentos/Depoimentos';
import { HeroSection } from './components/HeroSection/HeroSection';
import Funcionalidades from './components/Funcionalidades/Funcionalidades';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Apresentacao/>
      <Funcionalidades />
      <Depoimentos />
    </div>
  );
}

export default App;
