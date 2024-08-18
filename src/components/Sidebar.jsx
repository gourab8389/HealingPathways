import React from 'react'
import { sun } from "../assets"

const Icon ({styles, name, imageUrl, isActive, disabled, handleClick}) => {
    return (
        <div className={`h-[48px] w-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex items-center justify-center ${styles}`} onClick={handleClick}>
            {
                !isActive ? (
                    <img src={imageUrl} alt={"beat-cancer logo"} className='h-6 w-6' />
                ) : (
                    <img src={imageUrl} alt="beat-cancer logo" className={`h-6 w-6 ${isActive !== name && "grayscale" }`} />
                )
            }
        </div>
    )
}

const Sidebar = () => {
  return (
    <div>
      
    </div>
  )
}

export default Sidebar
