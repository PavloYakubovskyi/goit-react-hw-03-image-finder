import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ items, showItems }) => {
  return (
    <ul className="ImageGallery">
      {showItems &&
        items.map((item) => <ImageGalleryItem item={item} key={item.id} />)}
    </ul>
  );
};

export default ImageGallery;
