import React from 'react'

const index = () => {

const year = new Date().getFullYear();


  return (
    <>
    <footer className='footer'>
      <p> copyright © {year}</p>
    </footer>
    </>
  )
}

export default index