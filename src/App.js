import {useState, useEffect} from "react";
import Searchbar from './components/Searchbar/Searchbar';
import { ToastContainer} from "react-toastify";
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import  Modal  from './components/Modal/Modal';
import s from './App.module.css';
import LoaderSpiner from "./components/Loader/Loader";




export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);




useEffect(() =>{

  
  if (!searchQuery ) {
    return;
  }
       setIsLoading(true)     
      const API_KEY = "21675881-9f2314d809854342b3af65054";
      const BASE_URL = "https://pixabay.com/api";

      fetch(`${BASE_URL}/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then((response) => {
          if (response.ok) {
            return response.json()
           
          }
          return Promise.reject(
            new Error(`No image with name ${searchQuery}`),
          );
        })
     
        .then(data => data.hits)
        .then(arrayImage => {
          setImages(prevImages => [...prevImages, ...arrayImage]);
        })
        .catch(error => error)
        .finally(() => {
          setIsLoading( false );
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        });

}, [searchQuery, page])
    

const  resetState = () => {
    
  setShowModal(false);
  setImages([]);
  setPage(1);
  setSearchQuery('');
  setError(null);
  setSelectedImage(null);
  setIsLoading(false)
  };
    


 const  handleFormSubmit = searchQuery => {
     resetState();
    setSearchQuery(searchQuery)
  };
 
const openModal = (src, alt) => {

  setShowModal(true);
    setSelectedImage({ src, alt });

}
  
const  closeModal = () => setShowModal(false);
  
const  onLoadMore = () => {
    setPage(prevPage => ( prevPage + 1 ));
  };


  

    return (
       
      <div>
        <Searchbar onSubmit={handleFormSubmit} />
         {error && <h1>{error.message}</h1>}
        {searchQuery && <ImageGallery openModal={openModal} images={images}/>}
        {!searchQuery && <h2>Type the name of the image</h2>}
          <ToastContainer />
        {isLoading && <LoaderSpiner />}
        
 {images.length > 0 && <Button onClick={onLoadMore} />}
        

        {showModal && <Modal image={selectedImage} onClose={closeModal}  >
        </ Modal >}
      </div>
    );
  }
 
 
