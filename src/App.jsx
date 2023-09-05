import React, { useState, useEffect } from 'react';
import './App.css';
import ButtonGroup from './components/ButtonGroup';
import AlbumList from './components/AlbumList';

function App() {
    const [albums, setAlbums] = useState([]);
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/csttella/apiAlbuns/main/api_album.json')
            .then(response => response.json())
            .then(data => setAlbums(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="App">
            <ButtonGroup activeTab={activeTab} setActiveTab={setActiveTab} />
            <AlbumList albums={albums} activeTab={activeTab} />
        </div>
    );
}

export default App;