import style from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={style.contAbout}>
      <h1 className={style.title}>"Rick And Morty"</h1>
      <p className={style.parrafo}>
        Rick y Morty es una serie de televisión estadounidense de animación para
        adultos1creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim.
        La serie sigue las desventuras de un científico, Rick, y su fácilmente
        influenciable nieto, Morty, quienes pasan el tiempo entre la vida
        doméstica y los viajes espaciales, temporales e intergalácticos12. Rick
        es un genio loco, un científico desquiciado, que viaja en el tiempo o
        entre galaxias, explorando el universo y metiéndose en problemas. Morty
        se suma a estas travesías que tiene el estilo de sitcom.
      </p>
      <img
        className={style.imgAbout}
        src="https://th.bing.com/th/id/R.0fe6896a72b3aa75bf5fb15a962120e5?rik=FmebGkizMzuXzA&pid=ImgRaw&r=0"
        alt=""
      />

      <iframe
        width="1344"
        height="482"
        src="https://www.youtube.com/embed/LD4kZ8p6pQc?list=PLdohTq0dZYsUagIzq_3XBWYtkr2YyM70t"
        title="Rick Y Morty - Palizas Musculadas (HD) [Español/Castellano]"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <Link to="/home">
        <button className={style.btn}>home</button>
      </Link>
    </div>
  );
};

export default About;
