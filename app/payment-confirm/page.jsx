import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PaymentConfirm() {
	return (
		<div className='flex flex-col items-center align-middle  px-5 mt-4'>
			<Image src='/verified.gif'
				alt='check'
				width={330}
				height={330}
			/>
			<h2 className='text-[24px] text-[rgba(0,255,00)]'>Payment Successful !</h2>
			<h2 className='text-[17px] text-center mt-6 text-[#ff0984]'>We sent an email with your
				order confirmation
				along with Digital Content</h2>
			<Link
				href="/"
				className='p-2 mt-6 text-white rounded-md mb-10 bg-[#ff0984]'>
				Go to Home</Link>

		</div>
	)
}

export default PaymentConfirm