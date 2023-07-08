import React from 'react'
import ShimmerCard from './ShimmerCard'

const Shimmerwrapper = ({noofcards}) => {
     console.log(noofcards)
  return (
    <div className='flex flex-wrap justify-center gap-2'>
        {
            [...Array(10)].map((_, i) => <ShimmerCard key={i} />)
        }
    </div>
  )
}

export default Shimmerwrapper