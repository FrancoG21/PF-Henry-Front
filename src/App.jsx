import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pets from "./pages/Pets/Pets";
import NavBar from "./components/Users/NavBar/NavBar";

import Footer from "./components/Users/Footer/Footer";
import About from "./pages/About/About";
import PetDetail from "./components/Users/PetDetail/PetDetail";
import PetCreate from "./components/Users/PetCreate/PetCreate";
import ContenidoChatb from "./components/Chatbot/ContenidoChatb/ContenidoChatb"


// import LostPets from "./pages/LostPets/LostPets";
import Donation from "./pages/Donation/Donation";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Registrar";
import UserAdoptPetForm from "./components/Users/UserAdoptPetForm/UserAdoptPetForm"
import UserTransitPetForm from "./components/Users/UserTransitPetForm/UserTransitPetForm"
import UserProfile from "./pages/UserProfile/UserProfile";
import UserItsMyPetForm from "./components/Users/UserItsMyPetForm/UserItsMyPetForm";
import LostPets from "./pages/LostPets/LostPets";
import Success from "./pages/Donation/results/Success";
import Failure from "./pages/Donation/results/Failure";

//  MODO OSCURO //
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";
import { useDarkMode } from "./DarkLightMode/DarkMode";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { upLogin } from './redux/actions/index';

function App() {
  const dispatch = useDispatch();

  // const userInfo = useSelector((state) => state.usuario)

  useEffect(() => {
    window.localStorage.getItem('userInfo') && dispatch(upLogin(JSON.parse(localStorage.getItem("userInfo"))))
  }, [])

  // console.log(JSON.parse(localStorage.getItem("userInfo")))

  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === "light" ? "light" : "dark";

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={themes[themeMode]}>
          <NavBar theme={theme} setTheme={setTheme} />{/*userInfo={userInfo} */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/adopt" element={<Pets />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/petdetail/:id" element={<PetDetail />}></Route>
            <Route path="/petcreate" element={<PetCreate />}></Route>
            {/* <Route path="/lostform" element={<LostPets />}></Route> */}
            <Route path="/donation" element={<Donation />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/useradoptpet/:id" element={<UserAdoptPetForm />}></Route>
            <Route path="/usertransitpet/:id" element={<UserTransitPetForm />}></Route>
            <Route path="/donation/success" element={<Success />}></Route>
            <Route path="/donation/failure" element={<Failure />}></Route>
            {/* <Route path="/useradoptpet" element={<UserAdoptPetForm />}></Route>
            <Route path="/usertransitpet" element={<UserTransitPetForm />}></Route> */}
            <Route path="/userprofile" element={<UserProfile />}></Route>
            <Route path="/useritsmypet/:id" element={<UserItsMyPetForm />}></Route>
            <Route path="/lostpets" element={<LostPets />}></Route>
            <Route path="/chatbot" element={<ContenidoChatb />}></Route>
          </Routes>         
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
