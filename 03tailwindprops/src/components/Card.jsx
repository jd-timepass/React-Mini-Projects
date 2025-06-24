import React from 'react'

function Card({username}) {
  return (
    <div class="Card">
    <div class="image_container">
      <img src="https://www.deepiotics.com/blog/wp-content/uploads/2020/05/21.png" alt="" />
    </div>
    <div class="title">
      <span>
        <b>New Era of {username}</b>
      </span>
    </div>
     
    <div class="action">
  
      <button class="cart-button">
        <span>View More</span>
      </button>
    </div>
  </div>
  )
}

export default Card