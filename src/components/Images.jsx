import React, { useContext, useEffect, useState } from 'react';
import { ImageContext } from '../App';
import Skeleton from './Skeleton';
import { useDrag, useDrop } from 'react-dnd';
import ImageCard from './ImageCard';

const DraggableImage = ({ data, index, moveImage, images, setImages }) => {
  const [, ref] = useDrag({
    type: 'IMAGE',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'IMAGE',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))}>
      <ImageCard data={data} />
    </div>
  );
};

const Images = () => {
  const { response: initialImages, isLoading, searchImage } = useContext(ImageContext);

  console.log(initialImages)

  // State to manage the order of images
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Set the images state once initialImages is available
    setImages(initialImages);
  }, [initialImages]);


  console.log(images)

  // Define a function to handle image reordering
  const moveImage = (fromIndex, toIndex) => {
    // Implement logic to reorder images in the images state
    const reorderedImages = [...images];
    const [movedImage] = reorderedImages.splice(fromIndex, 1);
    reorderedImages.splice(toIndex, 0, movedImage);
    setImages(reorderedImages);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-center mt-6 underline text-2xl'>Results for {searchImage || 'Images'}</h1>

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4'>
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          images.map((data, index) => (
            <DraggableImage
              key={data.id}
              data={data}
              index={index}
              moveImage={moveImage}
              images={images}
              setImages={setImages}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Images;