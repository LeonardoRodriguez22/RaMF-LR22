import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Forms from "./components/Forms/Forms";
import Favorites from "./components/Favorites/Favorites";
import Registro from "./components/Registro/registro.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login";
      const { data } = await axios.get(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/onsearch/${id}`
      );
      let Late = "";
      const character = characters;
      character.map((char) => {
        if (char.id === id) {
          Late = char.id;
          window.alert("🤙🤙This character is already on your list🤙🤙!!!");
        }
      });
      if (!Late && data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      window.alert("🔥🔥The character with this ID does not exist!!!🔥🔥");
    }
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== id;
      })
    );
  };

  return (
    <div>
      {pathname !== "/" && pathname !== "/about" &&  pathname !== "/registro" && (
        <NavBar onSearch={onSearch} setAccess={setAccess} />
      )}
      <Routes>
        <Route path="registro" element={<Registro />}/>
        <Route path="/" element={<Forms login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
