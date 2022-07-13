import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pets from "./pages/Pets/Pets";
import NavBar from "./components/Users/NavBar/NavBar";
import Icono from './components/Chatbot/Icono/Icono'

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

//ADMIN
import AdminHome from "./pages/AdminHome/AdminHome";
import AdminPets from "./components/Admin/AdminPets/AdminPets";
import AdminDonation from "./components/Admin/AdminDonation/AdminDonation";
import AdminUsers from "./components/Admin/AdminUsers/AdminUsers";
import FormLostAnimals from "./components/Admin/FormLostAnimals/FormLostAnimals";
import FormAdopt from "./components/Admin/FormAdopt/FormAdopt";
import FormTransit from "./components/Admin/FormTransit/FormTransit";
import ProfilePets from "./components/Admin/ProfilePets/ProfilePets";
import Peticiones from './components/Admin/AdminUsers/Peticiones'
//  MODO OSCURO //
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/themes";
import { useDarkMode } from "./DarkLightMode/DarkMode";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { upLogin } from './redux/actions/index';
import DonationCard from "./pages/UserProfile/DonationCard/DonationCard";
import Seguimiento from "./pages/UserProfile/Seguimiento/Seguimiento";
import CarruselSeguimiento from "./components/Users/CarruselSeguimiento/CarruselSeguimiento";
import Redireccion from "./components/Chatbot/Redirect";

function App() {
  const dispatch = useDispatch();
  const usuario = useSelector(state=>state.usuario)
  const [token, setToken] = useState(window.localStorage.getItem('userInfo'))

  useEffect(() => {
    window.localStorage.getItem('userInfo') && dispatch(upLogin(JSON.parse(localStorage.getItem("userInfo"))))
  }, [])

  useEffect(()=>{
    setToken(usuario)
  }, [usuario])

  const [theme, setTheme] = useDarkMode();
  const themeMode = theme === "light" ? "light" : "dark";

  

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={themes[themeMode]}>
          <NavBar theme={theme} setTheme={setTheme} />{/*userInfo={userInfo} */}
          
          {/* <Icono /> */}
         

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/adopt" element={<Pets />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/petdetail/:id" element={<PetDetail />}></Route>
            <Route path="/petcreate" element={token ? <PetCreate /> : <Redireccion URL='/' />}></Route>
            {/* <Route path="/lostform" element={<LostPets />}></Route> */}
            <Route path="/donation" element={token ? <Donation /> : <Redireccion URL='/' />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/useradoptpet/:id" element={token ? <UserAdoptPetForm /> : <Redireccion URL='/' />}></Route>
            <Route path="/usertransitpet/:id" element={token ? <UserTransitPetForm /> : <Redireccion URL='/' />}></Route>
            <Route path="/donation/success" element={token ? <Success /> : <Redireccion URL='/' />}></Route>
            <Route path="/donation/failure" element={token ? <Failure /> : <Redireccion URL='/' />}></Route>
            {/* <Route path="/useradoptpet" element={<UserAdoptPetForm />}></Route>
            <Route path="/usertransitpet" element={<UserTransitPetForm />}></Route> */}
            <Route path="/userprofile" element={token ? <UserProfile /> : <Redireccion URL='/' />}></Route>
            <Route path="/useritsmypet/:id" element={token ? <UserItsMyPetForm /> : <Redireccion URL='/' />}></Route>     
            <Route path="/lostpets" element={<LostPets />}></Route>      
            <Route path="/admin" element={token ? <AdminHome /> : <Redireccion URL='/' />}></Route>
            <Route path="/admin/pets" element={token ? <AdminPets /> : <Redireccion URL='/' />}></Route>
            <Route path="/admin/users" element={token ? <AdminUsers /> : <Redireccion URL='/' />}></Route>
            <Route path="/admin/donation" element={token ? <AdminDonation /> : <Redireccion URL='/' />}></Route>
            <Route path="/admin/formadopt" element={token ? <FormAdopt /> : <Redireccion URL='/' />}></Route>
            <Route path="/admin/formlost" element={token ? <FormLostAnimals /> : <Redireccion URL='/' />}></Route>
            <Route path="/admin/formtransit" element={token ? <FormTransit /> : <Redireccion URL='/' />}></Route>
            <Route path="/admin/profilepets/:id" element={token ? <ProfilePets /> : <Redireccion URL='/' />}></Route>
            <Route path="/admin/petitionuser/:id" element={token ? <Peticiones /> : <Redireccion URL='/' />}></Route>
            {/* <Route path="/useritsmypet/:id" element={<UserItsMyPetForm />}></Route> */}
            {/* <Route path="/lostpets" element={<LostPets />}></Route> */}
            <Route path="/chatbot" element={token ? <ContenidoChatb /> : <Redireccion URL='/' />}></Route>
            <Route path="/userseguimiento/:id" element={token ? <Seguimiento /> : <Redireccion URL='/' />}></Route>
            <Route path="/seguimiento" element={token ? <CarruselSeguimiento /> : <Redireccion URL='/' />}></Route>                     
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />                     
          </Routes>         
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
