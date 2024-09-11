"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { SunMoon, MoonStar, ShoppingCart } from "lucide-react";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import CartBody from'../_components/CartBody';
import Desktop from'./Desktop';
import Mobile from "./Mobile";
function Header() {
  const { user } = useUser();
  const [LoggedIn, setLoggedIn] = useState(false);
  const [presstoggel,setpresstoggel]=useState(false);
  const [hreff,sethreff]=useState('');
/* This block of code in the `Header` component is responsible for managing the user's cart items and
checking if the user is logged in. Here's a breakdown of what each part does: */
  const { cart, setcart } = useContext(CartContext);
  useEffect(() => {
    setLoggedIn(window.location.href.toString().includes("sign-in"));
  }, []);
  useEffect(() => {
    user && getcartItemsHeader();
  }, [user]);
  const getcartItemsHeader = () => {
    CartApis.getCartitems(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        console.log(`Items form Header Component`, res);

        res?.data?.data.forEach((item) => {
          setcart((oldCart) => [
            ...oldCart,
            {
              id: item.id,
              product: item?.attributes?.products?.data[0],
            },
          ]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    !LoggedIn&&  
      <header className="bg-white dark:bg-slate-800 z-30">
      <div className=" mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
        <Image
          style={{ cursor: "pointer" }}
          src="/logo.svg"
          width={50}
          height={50}
          alt="This Logo"
        />   
        <div className="flex flex-1 items-center justify-end md:justify-around ">
          <nav aria-label="Global" className="hidden md:block">
<Mobile/>
            <ul className="flex items-center gap-6 text-sm ">
              <li  className=" text-[#ff0984]">
                <Link
                  className=" text-[#ff0984] hover:border hover:border-[#ff0984] p-2 text-[15px] transition"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className=" text-[#ff0984] hover:border-[#ff0984]  transition-opacity hover:border p-2 , text-[15px] duration-500   "
                  href="/productsection"
                >
                  Explore
                </Link>
              </li>


              <li className="anm">
                <Link
                  className=" text-[#ff0984] hover:border hover:border-[#ff0984] p-2 text-[15px]  transition"
                  href="/explore"

                >
                  Projects
                </Link>
              </li>
              <li className="anm">
                <Link
                  className=" text-[#ff0984] text-[15px]  transition hover:border hover:border-[#ff0984] p-2"
                  href="https://jonedoe3639.github.io/My-Website1"
                  

                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {!user ? (
              <div className="sm:flex sm:gap-4">
                <Link
                  className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                  href="/sign-in"
                >
                  Login
                </Link>

                <Link
                  className="hidden rounded-md hover:border hover:border-[#ff0984] p-2 bg-gray-100 px-5 py-2.5 text-sm text-[#ff0984] font-medium  transition hover:text-teal-600/75 sm:block dark:bg-gray-800  dark:hover:text-white/75"
                     href="/sign-in"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex gap-5 items-center mr-5">
              <h2 className="gap-1 cursor-pointer flex ">
              <ShoppingCart cart={setpresstoggel} onClick={()=>setpresstoggel(!presstoggel)} className="cursor-pointer" />
              <strong onClick={()=>setpresstoggel(!presstoggel)} className="text-[rgba(0,255,0)]">
              ( {cart?.length} )
              </strong>
              </h2>
              <UserButton className="cursor-pointer" />
               {presstoggel&&<CartBody/>} 
              </div>
            )}

            <SunMoon
              id="light"
              className="text-9xl rounded-full text-[#ff0984] text-[30px]  cursor-pointer"
            />
            <MoonStar
              id="dark"
              className="text-9xl text-[30px] text-yellow-50 cursor-pointer"
            />

            <button className="block rounded bg-transparent p-2.5 text-transparent transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
            <Mobile/>
            </button>
          </div>
        </div>
      </div>
    </header>
      

    )
  ;
}
// document.getElementById('dark').addEventListener('click',()=>console.log('dark'))
export default Header;
