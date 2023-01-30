import Places from '@/utils/Places'
import React from 'react'


const Popularplaces = () => {
  return (
    <div className='mx-2 mt-4'>
        <span className='text-2xl font-Popin'>Popular localities in and around <span className="font-semibold">Indore</span></span>
        <div className='grid md:grid-cols-3'>
            <Places/>
            <Places/>
            <Places/>
            <Places/>
            <Places/>
            <Places/>
            <Places/>

            
        </div>
    </div>
  )
}

export default Popularplaces