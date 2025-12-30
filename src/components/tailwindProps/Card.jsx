import React from 'react'

function Card({username}) {
  return (
  //   <div class="Card">
  //   <div class="image_container" className='bg-red-400 m-7 p-11'>
  //     <img src="/vite.svg" alt="vite image" />
  //   </div>
  //   <div class="title">
  //     <span>
  //       <b>New Era of {username}</b>
  //     </span>
  //   </div>
     
  //   <div class="action">
  
  //     <button class="cart-button">
  //       <span>View More</span>
  //     </button>
  //   </div>
  // </div>



  <div className='bg-white ml-60 mr-60 rounded-lg min-h-60 w-[220px] shadow-lg '> 

  <div className='flex justify-center m-4 p-6'>
    
    <img src="/vite.svg" alt="vite image" />
  </div>

  </div>
  )
}

export default Card;
