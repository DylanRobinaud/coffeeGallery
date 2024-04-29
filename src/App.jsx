import "./App.css";
import Header from "./components/header/header";
import Gallery from "./components/sectionGallery/Gallery";
import photoList from "./assets/photoList";

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="mainCoffee">
        <Gallery photoList={photoList} />
      </main>
    </>
  );
}

export default App;
