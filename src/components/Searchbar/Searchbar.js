import {useState, useEffect} from "react";
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';



export default function Searchbar({onSubmit}) {
  const [searchQuery, setSearchQuery] = useState('');
   

    const handleNameChange = e => {
        setSearchQuery( e.currentTarget.value.toLowerCase())}


   const  handleSubmit = e => {
        e.preventDefault();

        if (searchQuery.trim() === '') {
             return  toast.error('Enter the name');

        }
        onSubmit(searchQuery );
        setSearchQuery( '' );
    }

    
        return (
            <header className={s.searchbar}>
                <form className={s.searchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={s.searchForm_button}>
                        <span className={s.searchForm_button_label}>Search</span>
                    </button>

                    <input
                        value={searchQuery}
                        onChange={handleNameChange}
                        className={s.searchForm_input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>)
    
}
 Searchbar.propTypes = {
     onSubmit: PropTypes.string.isRequired,
     handleNameChange: PropTypes.func.isRequired,
     handleNameChange: PropTypes.func.isRequired,
     
};
 