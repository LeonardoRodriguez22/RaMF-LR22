import { useSelector, useDispatch } from "react-redux";
import CardFav from "../cardFav/cardFav";
import style from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.divFav}>
      <select className={style.btnSelect} onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select className={style.btnSelect} onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderlees</option>
        <option value="unknown">Unknown</option>
        <option value="allCharacters">All Characters</option>
      </select>

      {myFavorites?.map(
        ({ name, id, image, status, species, gender, origin }) => {
          return (
            <CardFav
              key={id}
              id={id}
              name={name}
              image={image}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
            />
          );
        }
      )}
    </div>
  );
};

export default Favorites;
