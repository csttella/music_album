import React, { useState } from 'react';
import './ButtonGroup.css';

function ButtonGroup({ activeTab, setActiveTab }) {
    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="button-group">
            <button className={activeTab === 'all' ? 'active' : ''} onClick={() => handleClick('all')}>Álbuns</button>
            <button className={activeTab === 'popular' ? 'active' : ''} onClick={() => handleClick('popular')}>Mais tocados</button>
            <button className={activeTab === 'recent' ? 'active' : ''} onClick={() => handleClick('recent')}>Mais recentes</button>
        </div>
    );
}

export default ButtonGroup;