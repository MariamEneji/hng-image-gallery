import React, { createContext, useState } from 'react'
import useAxios from './hooks/useAxios'
import './App.css';
import Images from './components/Images';
import Jumbotron from './components/Jumbotron';
import SearchField from './components/SearchField';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';



// Create Context
export const ImageContext = createContext();


function Main() {
const [searchImage, setSearchImage] = useState('')

const {response, isLoading, error, fetchData} = useAxios(`search/photos?page=1&query=random&client_id=${process.env.REACT_APP_ACCESS_KEY}`)

const value = {
  response,
  isLoading,
  error,
  fetchData,
  searchImage,
  setSearchImage
}

const isTouchDevice = () => {
  if ("ontouchstart" in window) {
    return true;
  }

  return false;
}


const backendForDND = isTouchDevice() ? TouchBackend && HTML5Backend  : HTML5Backend;

  return (

  

   
    
    
    <ImageContext.Provider value={value}>
    <Jumbotron>
      <SearchField />
    </Jumbotron>

<DndProvider backend={backendForDND}>

    <Images />
    </DndProvider>
    </ImageContext.Provider>
    
    
    
  );
}

export default Main;