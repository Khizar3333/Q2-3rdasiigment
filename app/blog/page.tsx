
import React from 'react'
import{ blogdata } from "../blogdata/data";
import Link from 'next/link';
import Image from 'next/image';

const blog = () => {
  return (
<div className="sm:grid sm:grid-cols-2 max-w-4xl mx-auto py-8">
  {blogdata.map((item) => (
 

    <div className="my-4 mx-2  border-2 " key={item.slug}>
      <div className="w-auto border-b-2">
      <Image
        src={item.img}
        width={400}
        height={300}
        alt="logo"
        className="w-full  h-48  max-w-full "
      />
      </div>
        <h2 className=" ml-2 text-xl font-bold">{item.title}</h2>


    <div className="ml-2 prose" >
      <p className="mt-2 text-sm">{item.description.slice(0, 80)}</p>
      <div className="mb-2">
      <Link href={`/blog/${item.slug}`} className=" mt-4 inline-block bg-blue-500 transition-all ease-in-out hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Read More
              </Link>
              </div>
    </div>
    </div>

))}
</div>
    
  

  )
}


    

export default blog
   
        