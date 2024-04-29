import { useState } from "react";
import "../../App.css";

function Photo(props) {
  const [count, setCount] = useState(props.like);
  const handleClickLike = () => {
    setCount((count) => count + 1);
  };
  return (
    <section>
      <h2>{props.photoName}</h2>
      <figure>
        <img src={props.imgSrc} alt={props.photoName} />
        <figcaption>
          <p>{props.description}</p>
        </figcaption>
      </figure>
      <span>{props.price} EUR</span>
      <button onClick={handleClickLike}>{count}❤️</button>
    </section>
  );
}

export default Photo;
