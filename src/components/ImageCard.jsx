


const ImageCard = ({data}) => {

 

  console.log(data)


  return (
  
    <a href={data.urls.regular} target='_blank' rel='noreferrer' >
        <img className='h-48 md:h-64 w-64 object-cober rounded-lg shadow-md' src={data.urls.small} alt={data.alt_description} />
    </a>
    
  )
}

export default ImageCard