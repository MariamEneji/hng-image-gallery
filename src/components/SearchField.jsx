import React, { useContext, useState } from 'react'
import { ImageContext } from '../App'

const SearchField = () => {

const [searchValue, setSearchValue] = useState('')

const {fetchData, setSearchImage} = useContext(ImageContext)




const handleInputChange = (e) => {
    setSearchValue(e.target.value)
}

const handleButtonSearch = () => {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    setSearchValue('');
    setSearchImage(searchValue)
}

const API_KEY = 'E44Kiw7WFEdl1s75_FMlY7dBWQEY0NNoK7thAG4cEMg';

const handleEnterSearch = e => {
if (e.key === 'Enter') {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${API_KEY}`)
    setSearchValue('')
    setSearchImage(searchValue)
}
}


  return (
    <div className='flex'>
        <input 
        className='bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-pink-500 focus:ring-1 rounded-tl rounded-bl'
        type="search" placeholder='Search anything' 
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        
        />
        <button
        onClick={handleButtonSearch}
        disabled={!searchValue}
         className='bg-pink-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-pink-300 disabled:bg-gray-400' >Search</button>
    </div>
  )
}

export default SearchField