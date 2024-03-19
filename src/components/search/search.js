import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { CITY_API_URL, URLoptions } from '../../api'
import './Search.css'
const Search = ({searchHandler}) => {
  
  const [search,setSearch] = useState(null)

  function handleChange(searchValue) {
    setSearch(searchValue)
    searchHandler(searchValue)
  }

  const loadOPtions = async (inputValue) =>{
    try {
        const response = await fetch(`${CITY_API_URL}namePrefix=${inputValue}`, URLoptions);
        const result = await response.json();
        const options = result.data.map((item) => ({
            value: [item.latitude,item.longitude], // Assuming your item has an ID
            label: item.name // Assuming your item has a name
          }));
        return {options}   
    } catch (error) {
        console.error(error);
    }
  }

  return (

    <AsyncPaginate 
    className='searchBox'
        placeholder=". enter city name"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOPtions}
    />
  )
}

export default Search