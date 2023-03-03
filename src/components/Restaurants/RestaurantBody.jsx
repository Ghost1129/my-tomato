import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { OverviewFieldComponent, MenuComponent,OrderOnlineFieldComponent,ReviewsComponent,PhotosComponent } from '@/containers/RestaurantPage'



const RestaurantBody = () => {
  const router = useRouter()
  const { restaurant,page } = router.query
  const [pageContent, setPageContent] = useState("")

  useEffect(() => {
    switch(`/indore/${restaurant}/${page}`){
      case `/indore/${restaurant}/`:
        setPageContent(<OverviewFieldComponent />)
        break
      case `/indore/${restaurant}/menu`:
        setPageContent(<OrderOnlineFieldComponent />)
        break
      case `/indore/${restaurant}/reviews`:
        setPageContent(<ReviewsComponent />)
        break
      case `/indore/${restaurant}/photos`:
        setPageContent(<PhotosComponent />)
        break

      default:
        setPageContent(<OverviewFieldComponent />)

    }

  }, [restaurant,page])
 




  return (
    <div className='mt-4 font-Popin'>
        <nav className='w-full border-b-4'>
            <ul className='flex gap-32 text-lg '>
                <Link
                href={{
                    pathname: `/indore/${restaurant}`,
                    query: { page: 'overview' },
                }}
                >Overview</Link>
                <Link
                href={{
                    pathname: `/indore/${restaurant}`,
                    query: { page: 'menu' },
                }}
                >Menu</Link>
                <Link
                 href={{
                  pathname: `/indore/${restaurant}`,
                  query: { page: 'reviews' },
              }}
                >Reviews</Link>
                <Link
                 href={{
                  pathname: `/indore/${restaurant}`,
                  query: { page: 'photos' },
              }}
                >Photos</Link>
                <li className='cursor-pointer'>More</li>
            </ul>
        </nav>
        <div>
            {pageContent}
        </div>

    </div>
  )
}

export default RestaurantBody