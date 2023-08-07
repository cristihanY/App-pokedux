import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import StarButton from '../Buttons/StarButton';
import { useDispatch, useSelector } from 'react-redux';
import {setFavorite} from '../../slices/dataSlice'


const PokemonCard = ({name, img, ability, id, favorite}) => {
    
    const statemode = useSelector((state) => state.mode.statemode);
    const dispatch = useDispatch();
   const  handleOnClick = () => {
        dispatch(setFavorite({pokemonId: id}))
    }

      // Establecer el color de fondo en función de statemode
  const cardStyle = {
    backgroundColor: statemode ?  '#b3b3b3': '#ffffff',
  };
  
return (
    <Card 
    style={cardStyle}
    title = {name}
    cover = {<img 
        src={img}
        alt = "didto"
        ></img>}
    extra = {<StarButton isFavorite = {favorite} onClick={handleOnClick}/>}>
    <Meta description ={ability} ></Meta>
    </Card>
)
}

export default PokemonCard;
