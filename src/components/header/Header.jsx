import React, { useEffect, useState } from 'react';
import MENU from '../../statics/icons/menu.svg';
import SOL from '../../statics/icons/soleado.svg'
import LOGO from '../../statics/icons/logo.svg';
import LUNA from '../../statics/icons/luna.svg'
import './styles/sHeader.css';
import MovilMenu from '../menu/MovilMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setStatemode } from '../../slices/modeSlice';

const Header = ({appClassName}) => {

    const [isMobile, setIsMobile] = useState(false);
    const [showLogo, setShowLogo] = useState(true);
    const [showMenu, setShowMenu] = useState(false); 

    const statemode = useSelector((state) => state.mode.statemode);
    const dispatch = useDispatch();
  
    const handleHideMenuState = () => {
      // Aquí puedes realizar cualquier lógica necesaria antes de cambiar el valor de statemode
      // Por ejemplo, si quieres alternar el valor de statemode entre verdadero y falso
      const newMode = !statemode; // Invierte el valor actual
      // Luego, llamas al dispatch para cambiar el valor de statemode
      dispatch(setStatemode(newMode));
    };

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      const handleScroll = () => {
        // Aquí ajusta el valor '200' según el punto en el que desees que el logo desaparezca.
        setShowLogo(window.scrollY <= 200);
      };
  
      // Detectar el tamaño inicial de la pantalla
      setIsMobile(window.innerWidth <= 768);
  
      // Agregar event listeners para detectar cambios de tamaño de la pantalla y desplazamiento
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
  
      // Limpieza de event listeners cuando el componente se desmonte
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleHideMenu = () => {
        // Cambiar el estado de la visibilidad del menú móvil cuando se haga clic en el icono de hamburguesa
        setShowMenu(!showMenu);
      };

  return (
<div className= {`contendHeader ${appClassName}h` }>
      <header>
        {isMobile && (
            <>
            <figure className='figureIcon' onClick={handleHideMenu}>
            <img className="icon" src={MENU} alt="Icono de hamburguesa" />
            </figure>
                <figure className='figureIconLogo'>
                <img className="iconLogo" src={LOGO} alt="Icono LOgo" />
            </figure>
            <figure  className='figureIcon2' onClick={handleHideMenuState}>
                <img className="icon" src={ statemode ? SOL: LUNA} alt="Icono +" />
            </figure>
            </>
        )}

        {!isMobile && (
            <>
            <figure className= {`figureIconLogo ${showLogo ? '' : 'hideLogo'}`}>
              <img className='iconLogo'  src={LOGO} alt="Icono LOgo" />
            </figure>
            <div className={`optionsLight ${showLogo ? '' : 'optionsLight2'} ${appClassName}hs`}>
            <div className= {`menuOptions ${showLogo ? '' : 'menuOptions2' }` }>
                <a href="#-">Pokemons</a>
                <a href="#-">N Pokemons</a>
                <a href="#-">Mas</a>
            </div>
            <div className='imgContend'>

            <figure className='figureIcon2' onClick={handleHideMenuState}>
                <img className="icon" src={ statemode ? SOL: LUNA}  alt="Icono +" />
            </figure>
            </div>
            </div>
            </>
        )}

     {showMenu && <MovilMenu onHideMenu={handleHideMenu}/>}

      </header>
    </div>
  )
}

export default Header;
