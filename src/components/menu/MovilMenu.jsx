import React from 'react';
import './styles/sMobileMenu.css';
import X from '../../statics/icons/x.svg'


const MovilMenu = ({ onHideMenu }) => {
  return (
    <>
          {/* Botón de ocultar fuera de la clase menuMovil */}

      <div className='menuMovil'>
      <button className='hideButton' onClick={onHideMenu}>
        <img src={X} alt="Ocultar" />
      </button>
    <a href="#-">Pokemons</a>
    <a href="#-">N Pokemons a la vi</a>
    <a href="#-">Mas</a>
  </div>
    </>

  )
}

export default MovilMenu
