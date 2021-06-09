import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import SearchIcon from '@material-ui/icons/Search';

const Searchbar = ({setSearchResults}) => {
    const [search, setSearch] = useState()
    const history = useHistory();

      const handleSubmit = (e) => {
        e.preventDefault();
        commerce.products.list({'query': `${search}`}).then(response => {
            setSearchResults(response.data);
            history.push('/results');
        });
      }
 
    return (
        <div>
            <form className="search-bar" onSubmit={handleSubmit}>
            <input placeholder="search" className="search-bar-input" type="text" onChange={(e) => setSearch(e.target.value)} />
            <SearchIcon className="search-bar-icon"/>
            </form>
        </div> 
    )
}

export default Searchbar;
