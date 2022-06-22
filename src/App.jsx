import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import ToAdopt from './pages/To Adopt/ToAdopt';
import NavBar from './components/Users/NavBar/NavBar';

//  MODO OSCURO //
import { ThemeProvider } from 'styled-components';
import { themes } from './styles/themes';
import { useDarkMode } from './DarkLightMode/DarkMode';

function App() {

  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === 'light' ? 'light' : 'dark';

  return (
    <div className='App'>
      <h1>PF Henry</h1>
      <BrowserRouter>
        <ThemeProvider theme={themes[themeMode]}>
          <NavBar theme={theme} setTheme={setTheme}/>
          <Routes>
            <Route path='/' element={ <Home/> }></Route>
            <Route path='/adopt' element={ <ToAdopt/> }></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      
    </div>
  )
}

export default App
