import React, { useState, useEffect } from 'react';
import './App.css';

function Item({ match }) {

    useEffect(() => {
        fetchItem();
    },[]);

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`)
        const item = await fetchItem.json()
        setItem(item.data);
        console.log(item.data);
    }

  return (
    <div>
        <h1>{item.name}</h1>
        <img src={item.images.icon} />
    </div>
  );
}

export default Item;
