'use client'
import Image from 'next/image'
import React from 'react'

export const Avator = () => {
  return (
    <div>
        <Image className='rounded-full ' height="30" width="30" alt='Avator ' src="/images/Avator.png" />
    </div>
  )
}
