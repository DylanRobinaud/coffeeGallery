import "../../App.css";
import Photo from "./photo.jsx";

function Gallery({ photoList }) {
  return (
    <>
      {photoList.map((photo) => {
        return (
          <Photo
            key={photo.id}
            photoName={photo.photoName}
            description={photo.description}
            image={photo.image}
            like={photo.like}
          />
        );
      })}
    </>
  );
}

export default Gallery;
