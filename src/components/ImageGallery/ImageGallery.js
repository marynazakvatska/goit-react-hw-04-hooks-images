import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem'
import PropTypes from 'prop-types';


const ImageGallery = ({ images, openModal }) =>  {
   
        return (
            <ul className={s.imageGallery}>
         {images.map(({ webformatURL, largeImageURL, tag, id }) => {
                    return (
                        <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tag={tag}
                            openModal={() => openModal(webformatURL, largeImageURL, tag, id)}
                        />
                    )
                })} 
            </ul>
        )
    }
 

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    }),
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
