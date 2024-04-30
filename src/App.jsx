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

  const [totalLikes, setTotalLikes] = useState(
    parseInt(localStorage.getItem("totalLikes")) || 0
  );

  const incrementTotalLikes = () => {
    const newTotalLikes = totalLikes + 1;
    setTotalLikes(newTotalLikes);
    localStorage.setItem("totalLikes", newTotalLikes.toString());
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
              className="searchInput"
              type="text"
              placeholder="Recherche par mot-clé ..."
              value={searchWord}
              onChange={handleSearchWord}
            />
            <p className="totalLikes">Total Likes: {totalLikes}</p>
          </div>
          <div className="galleryCoffee">
            <Gallery
              photoList={photoList}
              searchWord={searchWord}
              incrementTotalLikes={incrementTotalLikes}
            />
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
