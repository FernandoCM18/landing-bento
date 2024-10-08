import Image from 'next/image'
import React from 'react'

export const Image3 = () => {
  return (
    <div>
      <Image
        src="/assets/images/image3.svg"
        alt="image3"
        width={512}
        height={528}
      />
    </div>
  )
}
