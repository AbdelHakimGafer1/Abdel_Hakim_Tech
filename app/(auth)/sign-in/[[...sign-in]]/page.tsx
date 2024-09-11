import { SignIn } from '@clerk/nextjs'
import React from 'react'
export default function Page() {
  return (
    <div>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl text-[#ff0d84] font-bold sm:text-3xl">Get started today!</h1>

      <p className="mt-4 text-[#ceb77a]  ">
      Discover unique projects for purchase in our online store. Find the perfect project to suit your needs, with easy browsing and secure transactions.
Buy innovative projects effortlessly in our online store. Explore a variety of options and enjoy a seamless shopping experience with secure payments.
      </p>
    </div>
<div className='m-11 flex items-center justify-center'>
<SignIn  />
</div>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      className=" inset-0 h-full w-full object-cover relative"
    />
  </div>
</section>
    </div>
  )
}