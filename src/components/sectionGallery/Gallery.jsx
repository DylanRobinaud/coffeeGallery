import "../../App.css";
import React from "react";
import Photo from "./photo.jsx";

function Gallery({ photoList, searchWord }) {
  const filteredPhotos = photoList.filter((photo) =>
    photo.photoName.toLowerCase().includes(searchWord.toLowerCase())
  );
  return (
    <>
      {filteredPhotos.map((photo) => {
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
