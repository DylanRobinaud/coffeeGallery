import "./App.css";
import Gallery from "./components/sectionGallery/Gallery";
import photoList from "./components/photoList";

function App() {
  return (
    <>
      <body>
        <h1>Coffee Gallery</h1>
        <Gallery photoList={photoList} />
      </body>
    </>
  );
}

export default App;
