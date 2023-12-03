import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col mt-9">
        <h1 className="capitalize text-center text-2xl font-medium font-serif">welcome to KA Blogs </h1>
        <div className="flex justify-center">
         
          <button className="bg-blue-500 hover:bg-blue-700 outline-none text-white mt-5 transition-all ease-in font-bold py-2 px-8 w-52 h-12 rounded">
            <Link href={"/blog"} className="text-white">
              Go to Blogs
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
