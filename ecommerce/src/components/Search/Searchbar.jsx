import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import SearchIcon from '@material-ui/icons/Search';
import { AppContext } from '../../context/AppContext';

const Searchbar = ({setSearchResults}) => {
    const { setLoading } = useContext(AppContext);
    const [search, setSearch] = useState()
    const history = useHistory();

      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);    
        commerce.products.list({'query': `${search}`}).then(response => {
            setLoading(false);
            setSearchResults(response.data);
            history.push('/results');
            e.target.reset();
        });
      }
 
    return (
        <div>
            <form className="search-bar" onSubmit={handleSubmit}>
            <input placeholder="search" className="search-bar-input" type="text" onChange={(e) => setSearch(e.target.value)} />
            <SearchIcon onClick={handleSubmit} className="search-bar-icon"/>
            </form>
        </div> 
    )
}

export default Searchbar;
