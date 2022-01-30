import React from 'react';
import '../styles/music-list.css'
import Item from './Item';

export default function List({ data }) {
  return (
      <div className='music-list'>
        {data.map((music) => (
            <>
                {music.kind === "song" && (
                    <Item key={music.trackId} link={music.trackViewUrl} name={music.trackName} artist={music.artistName} />
                )}
            </>
        ))}
    </div>
  );
}
