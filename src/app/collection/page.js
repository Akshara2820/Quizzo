

import React from 'react';
import {FaSearch} from 'react-icons/fa';
import {BsArrowLeft} from 'react-icons/bs'
import Link from 'next/link'
import CollectionCard from './card';

const Items = [
    {image:'../assets/education.jpg', heading:'Education'},
    {image:'../assets/car.jpg', heading:'Education'},
    {image:'../assets/education.jpg', heading:'Education'},
    {image:'../assets/car.jpg', heading:'Education'},
    {image:'../assets/education.jpg', heading:'Education'},
    {image:'../assets/car.jpg', heading:'Education'},
    
]
function Collections() {
  return (
    <div>
       <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <Link href="/home">
            <div>
              <BsArrowLeft className="text-2xl" />
            </div>
          </Link>
          <div className="font-bold text-[20px]">Top Collections</div>
        </div>
        <div>
          <FaSearch />
        </div>
      </div>

      <div  className='grid grid-cols-2 gap-5 mt-10'>
        {Items.map((i) =>{
            return(
                <CollectionCard value={i} key={i.name}/>
            )
        })}
      </div>
    </div>
  )
}

export default Collections
