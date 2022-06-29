import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pets from "./pages/Pets/Pets";
import NavBar from "./components/Users/NavBar/NavBar";

import Footer from "./components/Users/Footer/Footer";
import About from "./pages/About/About";
import PetDetail from "./components/Users/PetDetail/PetDetail";
import PetCreate from "./components/Users/PetCreate/PetCreate";
import LostPets from "./components/Users/LostPets/LostPets";
import Donation from "./pages/Donation/Donation";
import UserAdoptPetForm from "./components/Users/UserAdoptPetForm/UserAdoptPetForm"
import UserTransitPetForm from "./components/Users/UserTransitPetForm/UserTransitPetForm"
import UserProfile from "./pages/UserProfile/UserProfile";

//  MODO OSCURO //
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";
import { useDarkMode } from "./DarkLightMode/DarkMode";

function App() {
  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === "light" ? "light" : "dark";

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={themes[themeMode]}>
          <NavBar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/adopt" element={<Pets />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/petdetail/:id" element={<PetDetail />}></Route>
            <Route path="/petcreate" element={<PetCreate />}></Route>
            <Route path="/lostform" element={<LostPets />}></Route>
            <Route path="/donation" element={<Donation />}></Route>
            <Route path="/useradoptpet" element={<UserAdoptPetForm />}></Route>
            <Route path="/usertransitpet" element={<UserTransitPetForm />}></Route>
            <Route path="/userprofile" element={<UserProfile />}></Route>
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
