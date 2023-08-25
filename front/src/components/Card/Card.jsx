import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  name,
  onClose,
  id,
  image,
  status,
  species,
  gender,
  origin,
}) => {
  const [isFav, setIsFav] = useState(false);

  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    isFav
      ? dispatch(removeFav(id))
      : dispatch(
          addFav({ name, onClose, id, image, status, species, gender, origin })
        );
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.tarjeta}>
      <button
        className={style.btnClose}
        onClick={() => {
          onClose(id);
        }}
      >
        Close
      </button>
      <Link to={`/detail/${id}`}>
        <img src={image} alt="" />
      </Link>
      {
        <button className={style.btnFiltro} onClick={handleFavorite}>
          {isFav ? "❤️" : "♡"}{" "}
        </button>
      }
      <h2>{id}</h2>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin.name}</h2>
      <h2>{name}</h2>
      <br />
    </div>
  );
};



export default Card;

