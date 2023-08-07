import './App.css';
import { Col, Spin } from 'antd';
import Searcher from './components/search/Searcher';

import PokemonList from './components/pokemons/PokemonList';


import { useEffect, useState} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fechPokemonsWithDetails } from './slices/dataSlice';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {

  const [searchTerm, setSearchTerm] = useState('');
  
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const statemode = useSelector((state) => state.mode.statemode);
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(fechPokemonsWithDetails());
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

    // Definimos las clases para los modos light y dark
    const lightModeClass = 'app-light';
    const darkModeClass = 'app-dark';
  
    // Dependiendo del valor de statemode, decidimos qué clase usar
    const appClassName = statemode === false ? lightModeClass : darkModeClass;
  

  return (
    <div className={`App ${appClassName}`}>
      <Header appClassName= {appClassName}>

      </Header>

      <div className='Not'>

      <Col span={18} offset={3}>
      <Searcher onSearch={setSearchTerm}></Searcher>
      </Col>

    { loading ?   
    <Col  span={5} offset={10} style={{marginTop: 30}}>
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>

          </Col> :
          <PokemonList pokemons = {filteredPokemons}></PokemonList>
        }
      </div>

    <Footer appClassName = {appClassName }>

    </Footer>
      
    </div>
  );
}



export default (App);
