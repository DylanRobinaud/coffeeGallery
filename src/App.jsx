import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/header";
import Gallery from "./components/sectionGallery/Gallery";
import EasterEgg from "./components/sectionCliker/EasterEgg";
import photoList from "./assets/photoList";

function App() {
  const [searchWord, setSearchWord] = useState("");

  const handleSearchWord = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main>
        <section className="mainCoffee">
          <div className="searchCoffee">
            <input
              type="text"
              placeholder="Recherche par mot-clé ..."
              value={searchWord}
              onChange={handleSearchWord}
            />
          </div>
          <div className="galleryCoffee">
            <Gallery photoList={photoList} searchWord={searchWord} />
          </div>
          <div className="easterEgg">
            <EasterEgg />
          </div>
        </section>
      </main>
    </>
  );
}
export default App;
