import React, { useEffect, useState } from "react";
import Search from "../../components/Search";

const MusicSearchPage = () => {
    const [musicsList, setMusicsList] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query) {
            fetch(`https://itunes.apple.com/search?term=${query}`)
            .then((res) => res.json())
            .then((data) => setMusicsList(data.results))
        }
    }, [query]);

    return (
        <div className='container'>
            <h1>Music</h1>
            <Search query={query} onChange={(value) => setQuery(value)} data={musicsList} />
        </div>
    );
};

export default MusicSearchPage;
