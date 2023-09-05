import React from 'react';
import './AlbumCard.css';

function AlbumCard({ album }) {
    return (
        <div className="album-card">
            <img src={album.album_cover} alt={album.album_title} />
            <h3>{album.album_name}</h3>
            <p>{album.artist_name}</p>
            <p>Gênero: {album.genre}</p>
            <p>Lançamento: {album.release_date}</p>
           
        </div>
    );
}

export default AlbumCard;