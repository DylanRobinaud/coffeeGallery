import { useState } from "react";
import "../../App.css";
import clikerIcone from "../../assets/clikerIcone.png";

function EasterEgg() {
  const [easterEggOpen, setEasterEggOpen] = useState(false);

  return easterEggOpen ? (
    <section>
      <button className="buttonEasterEgg">
        <img className="imageEasterEgg" src={clikerIcone} alt="" />
      </button>
    </section>
  ) : (
    <button className="buttonEasterEgg" onClick={() => setEasterEggOpen(true)}>
      <img className="imageEasterEgg" src={clikerIcone} alt="" />
    </button>
  );
}

export default EasterEgg;
