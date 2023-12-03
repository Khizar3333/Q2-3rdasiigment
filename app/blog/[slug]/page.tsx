"use client"

import Image from "next/image";
import{ blogdata } from "../../blogdata/data";


export default function Page({ params }: { params: { slug: string } }) {

  const findblog=blogdata.find((blog)=>blog.slug===params.slug)
    return(
      <div className="flex flex-col w-1/2 mt-7 mx-auto items-center space-y-5">
     <h1 className="text-3xl font-medium"> {findblog?.slug}</h1>
     <Image src={findblog?.img || ""} width={250} height={250} alt="logo"/>
    <p className="text-lg">{findblog?.description}</p>
    </div>

    )
  }