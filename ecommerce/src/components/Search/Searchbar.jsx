import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import { AppContext } from '../../context/AppContext';

const Searchbar = ({setSearchResults}) => {
    const { setLoading } = useContext(AppContext);
    const [search, setSearch] = useState('')
    const history = useHistory();

      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);    
        commerce.products.list({'query': `${search}`}).then(response => {
            setLoading(false);
            setSearchResults(response.data);
            history.push('/results');
        });
      }
 
    return (
        <div>
            <form className="search-bar" onSubmit={handleSubmit}>
            <input placeholder="search" className="search-bar-input" type="text" onChange={(e) => setSearch(e.target.value)} />
            <span className="search-bar-icons-container">
              <button className="search-bar-icon-button" type="reset">
                <CancelIcon id="search-bar-icon"/>
              </button>
              <button className="search-bar-icon-button" type="submit">
                <SearchIcon id="search-bar-icon"/>
              </button>
            </span>
            </form>
        </div> 
    )
}

export default Searchbar;
