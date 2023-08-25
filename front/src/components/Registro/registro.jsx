import { useState } from "react";
import Validations from "../Validations/validations";
import style from "./registro.module.css"
import {useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Registro = ({}) => {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  
  const [errors, setErrors] = useState({});
  
  const handleChange2 = (event) => {
      setErrors(
          Validations({ ...userData, [event.target.name]: event.target.value })
          );
          setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  



  const navigate = useNavigate();
  const [access1, setAccess1] = useState(false);
  
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login1";
      const { data } = await axios.post(
        URL , {email, password}

      );
      const { access1 } = data;
      setAccess1(access1);
      access1 && navigate("/");
    } catch (error) {
        console.log(error.message);
    }
  };

      const handleSubmit2 = (event) => {
        event.preventDefault();
        login(userData);
    };
    
    useEffect(() => {
        // !access1 && navigate("/");
      }, [access1]);
  
  return (
    <div className={style.home}>
      <form className={style.contForm}>
        <label className={style.label} htmlFor="email">
          Email:
        </label>
        <input
          className={style.input}
          onChange={handleChange2}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.e1 ? (
          <p className={style.parrafoError}>{errors.e1}</p>
        ) : errors.e2 ? (
          <p className={style.parrafoError}>{errors.e1}</p>
        ) : (
          <p className={style.parrafoError}>{errors.e1}</p>
        )}

        <label className={style.label} htmlFor="password">
          Password:
        </label>
        <input
          className={style.input}
          onChange={handleChange2}
          value={userData.password}
          type="text"
          name="password"
        />
        {errors.p1 ? (
          <p className={style.parrafoError}>{errors.p1}</p>
        ) : (
          <p className={style.parrafoError}>{errors.p1}</p>
        )}

        <button
          className={style.btnSubmit}
          onClick={handleSubmit2}
          type="submit"
        >
          crear usuario
       </button>
       <Link to="/">
        <button className={style.btn}>login</button>
      </Link>
      </form>
    </div>
  );
};

export default Registro;
