"use client";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { CartContext } from "../../_context/CartContext";
import { useUser } from "@clerk/nextjs";
import OrderApis from "../../_utils/OrderApis";
import CartApis from "../../_utils/CartApis";
const CheckoutForm = ({amount}) => {

const {cart,setCart}=useContext(CartContext);
const {user}=useUser();


  const stripe = useStripe();
  const elements = useElements();
//   const handleSubmit = async (event) => {
//     // We don't want to let default form submission happen here,
//     // which would refresh the page.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js hasn't yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }
//     const handleError = (error) => {
//       setLoading(false);
//       setErrorMessage(error.message);
//     };
//     const { error: submitError } = await elements.submit();
//     if (submitError) {
//       handleError(submitError);
//       return;
//     }
//     const res = await fetch("api/create-intent", {
//       method: "POST",
//       body: JSON.stringify({
//         amount: 10,
//       }),
//     });
//     const clientSecret = await res.json();
//     const result = await stripe.confirmPayment({
//       //`Elements` instance that was used to create the Payment Element
//       clientSecret,
//       elements,
//       confirmParams: {
//         return_url: "http://localhost:3000",
//       },
//     });

//     if (result.error) {
//       // Show error to your customer (for example, payment details incomplete)
//       console.log(result.error.message);
//     } else {
//       // Your customer will be redirected to your `return_url`. For some payment
//       // methods like iDEAL, your customer will be redirected to an intermediate
//       // site first to authorize the payment, then redirected to the `return_url`.
//     }
//   };
const [loading, setLoading] = useState(false);
const [errormessage, setErrorMessage] = useState()
const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}
		const handleError = (error) => {
			setLoading(false)
			setErrorMessage(error.message)
		}
		// Create New Order

		submitOrder();
		sendEmail();
		// Trigger form validation and wallet collection
		const { error: submitError } = await elements.submit();
		if (submitError) {
			handleError(submitError);
            alert('no')
			return;
		}
		const res = await fetch('api/create-intent', {
			method: 'POST',
			body: JSON.stringify({
				amount: amount
			})
		})
		const clientSecret = await res.json()

		const result = await stripe.confirmPayment({
			//`Elements` instance that was used to create the Payment Element
			clientSecret,
			elements,
			confirmParams: {
				return_url: "http://localhost:3000/payment-confirm",
			},
		});

		if (result.error) {
			// Show error to your customer (for example, payment details incomplete)
			console.log(result.error.message);
		} else {
			// Your customer will be redirected to your `return_url`. For some payment
			// methods like iDEAL, your customer will be redirected to an intermediate
			// site first to authorize the payment, then redirected to the `return_url`.
		}
	};
const submitOrder=()=>{
	let productsId=[];
	cart.forEach(item =>{
		productsId.push(item?.product?.id)
	} )
	const sendData = {
	data:{
		email:user.primaryEmailAddress.emailAddress,
		username:user.fullName,
		amount,
		products:productsId
	}	
	}

	OrderApis.createOrder(sendData).then(res=>{
		if (res) {
			cart.forEach(e=>{
				CartApis.deleteCartitem(e?.id).then(resulte2=>{
					console.log(resulte2)
				})
			})
		}
	})
}
const sendEmail = async () => {
	const res = await fetch('api/send-email', {
		method: 'POST',
		body: JSON.stringify({
			amount: amount,
			email: user.primaryEmailAddress.emailAddress,
			fullName: user.fullName
		})
	})
}
return (
    <div className="text-[#ff0984] bg-slate-200  flex items-center justify-center  w-full">
      <form
        onSubmit={handleSubmit}
        className="text-[#ff0984] bg-slate-200 mt-36 w-full h-full"
      >
        <div className="mx-32 md:mx-[320px] mt-3 mb-10 ">
          <PaymentElement />
          <button className="bg-[#ff0984] text-white rounded-md p-3 mt-4 w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
