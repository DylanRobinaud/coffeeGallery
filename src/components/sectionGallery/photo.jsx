import { useState } from "react";
import "../../App.css";

function Photo(props) {
  const [count, setCount] = useState(props.like);
  const handleClickLike = () => {
    setCount((count) => count + 1);
  };
  return (
    <section className="sectionCoffee">
      <article className="articleCoffee">
        <h3 className="nameCoffee">{props.photoName}</h3>
        <figure>
          <img
            className="imageCoffee"
            src={props.image}
            alt={props.photoName}
          />
          <figcaption>
            <p className="descriptionCoffee">{props.description}</p>
          </figcaption>
        </figure>
        <button className="likeCoffee" onClick={handleClickLike}>
          {count}❤️
        </button>
      </article>
    </section>
  );
}

export default Photo;
