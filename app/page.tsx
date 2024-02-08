"use client"
import Image from "next/image";
import React from "react";
import { TbSocial } from "react-icons/tb";
import { HiOutlineHome } from "react-icons/hi";
import { link } from "fs";
import { SiWpexplorer } from "react-icons/si";
import { BsEnvelopeOpenHeart } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoBookmarksOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { Inter, Quicksand } from "next/font/google";
import FeedCard from "@/components/FeedCard";
import { TbPremiumRights } from "react-icons/tb";
import { CgOptions } from "react-icons/cg";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';



const inter = Inter({ subsets: ["latin"] })








interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}
const sidebarMenuItems: TwitterSideBarButton[] = [{
  title: 'Home',
  icon: <HiOutlineHome />
},
{
  title: 'Explore',
  icon: <SiWpexplorer />

},
{
  title: 'Notification',
  icon: <IoMdNotificationsOutline />


},
{
  title: 'Messages',
  icon: < BsEnvelopeOpenHeart />


},
{
  title: 'Bookmarks',
  icon: <IoBookmarksOutline />
},
{
  title: 'Premium',
  icon: <TbPremiumRights />

},
{
  title: 'More Options',
  icon: <CgOptions />

},
{
  title: 'Profile',
  icon: <ImProfile />

},

]
export default function Home() {
  return (
    <div className="{inter.className}">
      <GoogleOAuthProvider clientId="845481435406-84tj2tgdonj3dv3ob6klcgdai90v1vm3.apps.googleusercontent.com">

        <div className="grid grid-cols-12 overflow-hidden h-screen w-screen px-56">
          <div className="  col-span-3 text-white pt-8 px-4">
            <div className="text-4xl h-fit w-fit hover: rounded-full p-2 cursor-pointer transition-all hover:text-green-600   ">
              <TbSocial className="animate-spin" />
            </div>
            <div className="mt-4 text-2xl font-semibold pr-4 ">
              <ul >
                {sidebarMenuItems.map(item => <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full  px-5 py-2 w-fit cursor-pointer mt-2 hover:text-green-600 " key={item}>
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>)}
              </ul>
              <div className="mt-5 px-3 hover:animate-pulse">
                <button className="bg-green-600 p-4 rounded-full w-full ">Post</button>
              </div>

            </div>


          </div>

          <div className="col-span-6 overflow-scroll border-r-[1px] border-l-[1px] border-gray-600 h-screen">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
          <div className="col-span-3 p-5">
            <div className=" border h-[200px] bg-slate-600 rounded-lg p-5 ">
              <h1 className="my-2 text-2xl?">New to Xocial</h1>
              <GoogleLogin onSuccess={(cred) => console.log(cred)} />
            </div>
          </div>
        </div>
      </GoogleOAuthProvider>
    </div >
  );
}
