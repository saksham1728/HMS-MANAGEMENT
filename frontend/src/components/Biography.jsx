import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className="container biography">
        <div className="banner">
            <img src={imageUrl} alt="about image" />
        </div>
        <div className="banner">
            <p>
                Biography
            </p>
            <h3>Who we are ?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime vel a, labore dolorem dolore id. Animi error quidem atque aspernatur praesentium, ex voluptatibus repellat soluta quibusdam itaque, rem labore quasi.
            </p>
            <p>Lorem ipsum dolor, sit amet consectetu.</p>
            <p>Lorem ipsum dolet.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi dicta alias omnis, molestiae quaerat, excepturi natus iure aliquam aspernatur asperiores libero cumque suscipit quo quod possimus laborum facere adipisci unde.</p>

        </div>
      
    </div>
  )
}

export default Biography
