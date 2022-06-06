import './App.css';
import CardsContainer from './components/CardsContainer';
import InputCityByUser from './components/InputCityByUser';

function App() {
  return (
    <div className="container mx-auto">
      <InputCityByUser/>
      <CardsContainer/>
    </div>
  );
}

export default App;
