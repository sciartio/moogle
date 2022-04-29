import { useState, useEffect } from 'react';

const SearchBar = ( { fun } ) => {

    const [ text, setText ] = useState('');

    useEffect ( () => {
        fun(text);
    }, [text]);

    return (
        <section className="search-bar">
            <form>
                <input type="text" className="form-control" placeholder="Search movies" value={text} 
                onChange={ (e) => setText(e.target.value) } />
            </form>
        </section>
    );
};

export default SearchBar;