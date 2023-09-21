


const Skeleton = ({item}) => {
  return [...Array(item).keys()].map(() => (
    <div className='animate-pulse w-64'>
        <div className='bg-gray-300 rounded-lg h-64 w-full'></div>
        
    </div>


    
  ))
}

export default Skeleton