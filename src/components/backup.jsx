// eslint-disable
import React, { useContext} from 'react'
import { ImageContext } from '../App';

import Skeleton from './Skeleton';

import ImageCard from './ImageCard';

const Images = () => {


    



    const {response, isLoading, searchImage} = 
    useContext(ImageContext);

    








  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className='text-center mt-6 underline text-2xl'>Results for {searchImage || 'Images'}</h1>

       

    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4'>
        {isLoading ? <Skeleton item={10} /> : response.map((data, key, index) => <ImageCard data={data} key={key}   />
       
       
        )}
       

    </div>

    
    </div>
  )
}

export default Images






