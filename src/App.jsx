import "./App.css";
import Header from "./components/header/header";
import Gallery from "./components/sectionGallery/Gallery";
import EasterEgg from "./components/sectionCliker/EasterEgg";
import photoList from "./assets/photoList";

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main>
        <section className="mainCoffee">
          <Gallery photoList={photoList} />
        </section>
        <section>
          <EasterEgg />
        </section>
      </main>
    </>
  );
}

export default App;
