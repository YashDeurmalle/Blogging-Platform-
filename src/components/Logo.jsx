import React from 'react'
import { assets } from '../assets/assets'

function Logo({width = '100px'}) {
  return (
    // <div>Logo</div>
    <div>
      <img src={assets.blog}
      width={45} height={45} alt="Logo" />
    </div>
  )
}

export default Logo