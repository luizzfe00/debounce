import React from 'react';
import '../styles/item.css';

export default function Item({ link, name, artist }) {
  return (
    <a  href={link} target='_blank' rel='noreferrer' className='item'>
        <span>{name}</span>
        <p className='item-subtitle'>{artist}</p>
    </a>
  );
}
