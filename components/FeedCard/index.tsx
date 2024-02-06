import React from "react";
import Image from 'next/image'
import { BiMessageSquare } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { MdOutlineFileUpload } from "react-icons/md";




const FeedCard: React.FC = () => {
    return <div className=" border-r-0 border-b-0 border-l-0   rounded-md border-gray-600 p-5 hover:bg-green-900 transition-all  overflow-hidden cursor-pointer  ">

        <div className="grid grid-cols-12">
            <div className="col-span-1 ">
                <Image
                    src="https://avatars.githubusercontent.com/u/135203869?v=4"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                    className="rounded-full hover:animate-pulse"
                />
            </div>
            <div className="col-span-11 text-white  ">
                <h5>Devashish</h5>

                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, assumenda aliquam. Delectus aliquam consectetur voluptates totam nobis!</p>
            </div>
            <div className="flex justify-between ml-5">
                <div className="text-white text-lg ml-6 mt-5"> < BiMessageSquare /></div>
                <div className="text-white text-lg ml-20 mt-5"> < FaRetweet /></div>
                <div className="text-white text-lg ml-20 mt-5"> < LuHeart /></div>
                <div className="text-white text-lg ml-20 mt-5"> <MdOutlineFileUpload /></div>
            </div>





        </div>
    </div>
}

export default FeedCard