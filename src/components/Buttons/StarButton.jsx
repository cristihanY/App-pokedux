import { Button } from "antd";
import {StarFilled, StarOutlined} from '@ant-design/icons'
import React from 'react'

const StarButton = ({isFavorite, onClick}) => {
    const Icon = isFavorite ?  StarFilled : StarOutlined ;
  return (
    <Button icon ={<Icon/> } onClick={onClick}/>
  )
}

export default StarButton;
