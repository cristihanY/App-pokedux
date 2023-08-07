import React from 'react';
import './styles/sFooter.css';

const Footer = ({appClassName }) => {
  return (
    <div className= 'footerGeneral'>
    {/* Tu footer aquí */}
    <footer className= {`${appClassName}f` } >
        <span>
         Copyright © 2023 YhanVí. Todos los derechos reservados.
        </span>
    </footer>
    </div>
  )
}

export default Footer
