import "../../App.css";
import Photo from "./photo.jsx";

function Gallery({ photoList }) {
  return (
    <>
      {photoList.map((photoList) => {
        return (
          <Photo
            key={photoList.id}
            photoName={photoList.photoName}
            description={photoList.description}
            price={photoList.price}
            imgSrc={photoList.imgSrc}
            like={photoList.like}
          />
        );
      })}
    </>
  );
}

export default Gallery;
