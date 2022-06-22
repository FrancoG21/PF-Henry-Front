import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ToAdopt from './pages/To Adopt/ToAdopt';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }></Route>
          <Route path='/adopt' element={ <ToAdopt/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
