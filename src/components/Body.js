import React from 'react'
import './Body.css';
import Card from './Card';
import ItemCount from './ItemCount';
import ItemListContainer from './ItemListContainer';
import Cards from './Card.js';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';

function Body() {


    return (
<section className='body'>
<div>
<ItemListContainer />
</div>
</section>

    )};


export default Body;

