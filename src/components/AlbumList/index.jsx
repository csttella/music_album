import React from 'react';
import AlbumCard from '../AlbumCard';
import './AlbumList.css';

function AlbumList({ albums, activeTab }) {
    let filteredAlbums = albums; // Inicialmente, todos os álbuns estão incluídos

    if (activeTab === 'popular') {
        // Se a guia "Mais Tocados" estiver ativa, classifique e filtre os álbuns
        filteredAlbums = albums
            .slice() // Crie uma cópia para não afetar a ordem original
            .sort((a, b) => b.number_plays - a.number_plays)
            .slice(0, 8); // Pegue os 8 primeiros álbuns mais tocados
    } else if (activeTab === 'recent') {
        // Se a guia "Mais Recentes" estiver ativa, filtre os 8 álbuns mais recentes
        filteredAlbums = albums
            .slice() // Crie uma cópia para não afetar a ordem original
            .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
            .slice(0, 8); // Pegue os 8 álbuns mais recentes
    }

    return (
        <div className="album-list">
            {filteredAlbums.map((album) => (
                <AlbumCard key={album.album_name} album={album} />
            ))}
        </div>
    );
}

export default AlbumList;