import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KYE!, {
  typescript: true,
  apiVersion: "2023-08-16",
});
export async function POST(request: any) {
  const data: any = await request.json();
  const amount = data.amount;

  try {
    console.log(process.env.STRIPE_SECRET_KEY)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: +amount.toFixed(2) * 100,
      currency: "USD",
    });
    return NextResponse.json(paymentIntent.client_secret, { status: 200 });
  } catch (error: any) {
    console.log(error)
    return new NextResponse(error, {
      status: 400,
    });
  }
}
