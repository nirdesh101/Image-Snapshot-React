import React from 'react'
import { useParams } from 'react-router-dom'

function SearchSelectedImage() {

  let { id } = useParams();

  return (
    <div className='text-white'>SearchSelectedImage : {id}</div>
  )
}

export default SearchSelectedImage