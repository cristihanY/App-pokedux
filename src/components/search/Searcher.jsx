import React from 'react';
import { Input } from 'antd';

const Searcher = ({ onSearch }) => {

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };
  return (
    <Input.Search placeholder='Buscar ....'
     style={{marginBottom: 10}}
     onChange={handleSearch}
     ></Input.Search>
   )
}

export default Searcher;
