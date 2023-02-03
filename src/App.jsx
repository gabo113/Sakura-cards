import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CardsIndex from './components/CardsIndex';

function App() {
  return (
    <div className='container'>
      <h1>SAKURA CARDS</h1>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CardsIndex></CardsIndex>}></Route>
          <Route path='/CardsIndex/:id' element={<CardsIndex></CardsIndex>}></Route>
        </Routes>
      </BrowserRouter>

       </div>

  );
}

export default App;
