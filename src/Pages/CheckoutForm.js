import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckoutForm = ({ data }) => {
  // const [cardError, setCardError] = useState("");
  // const [success, setSuccess] = useState("");
  // const [processing, setProcessing] = useState(false);
  // const [transactionId, setTransactionId] = useState("");
  // const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  // const { price, name, email, id } = data || {};

  // useEffect(() => {
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },

  //     body: JSON.stringify({ price }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    // const card = elements.getElement(CardElement);

    // if (card == null) {
    //   return;
    // }

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card,
    // });

    // if (error) {
    //   console.log("[error]", error);
    //   setCardError(error.message);
    // } else {
    //   // console.log('[PaymentMethod]', paymentMethod);
    //   setCardError("");
    // }

    // const { paymentIntent, error: confirmError } =
    //   await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: card,
    //       billing_details: {
    //         name: name,
    //         email: email,
    //       },
    //     },
    //   });
    // setSuccess("");
    // setProcessing(true);
    // if (confirmError) {
    //   setCardError(confirmError.message);
    //   return;
    // }
    // if (paymentIntent.status === "succeeded") {
    //   setSuccess("congrats! Your Payment completed");
    //   setTransactionId(paymentIntent.id);
    //   // stor payment info in database:-
    //   const payment = {
    //     price,
    //     email,
    //     paymentIntent: paymentIntent.id,
    //     bookingId: id,
    //   };
    //   fetch("/payments", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(payment),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.insertedId) {
    //         setSuccess("congrats! Your Payment completed");
    //         setTransactionId(paymentIntent.id);
    //         alert("data store by database");
    //       }
    //     });
    // }

    // setProcessing(false);
    // console.log("paymentIntent", paymentIntent);
  };

  return (
    <section className="py-12">
      <h1 className="text-center text-2xl font-semibold ">
        Complete Your Order Now
      </h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-50  md:py-12">
          <div className="mx-auto max-w-md space-y-2 px-4 lg:px-4">
            <div className="flow-root">
              <div className="flex items-center gap-4 py-4">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                  alt=""
                  className="h-16 w-16 rounded object-cover"
                />

                <div>
                  <h2 className="font-medium text-gray-900">
                    Create Your Website Within 3 Days
                  </h2>
                  <p className="text-2xl font-medium tracking-tight text-gray-900">
                    $99.99
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* payment from (start) */}

        <form className="border py-20 px-2 my-6" onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>


        {/* <div className="bg-white py-6 md:py-12">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4 border p-6 border-gray-200 shadow-sm">
              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Card Details
                </legend>

                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                  <div>
                    <label for="CardNumber" className="sr-only">
                      {" "}
                      Card Number{" "}
                    </label>

                    <input
                      type="text"
                      id="CardNumber"
                      placeholder="Card Number"
                      className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                    />
                  </div>

                  <div className="flex -space-x-px">
                    <div className="flex-1">
                      <label for="CardExpiry" className="sr-only">
                        {" "}
                        Card Expiry{" "}
                      </label>

                      <input
                        type="text"
                        id="CardExpiry"
                        placeholder="Expiry Date"
                        className="relative w-full rounded-bl-md border-gray-200 focus:z-10 sm:text-sm"
                      />
                    </div>

                    <div className="flex-1">
                      <label for="CardCVC" className="sr-only">
                        {" "}
                        Card CVC{" "}
                      </label>

                      <input
                        type="text"
                        id="CardCVC"
                        placeholder="CVC"
                        className="relative w-full rounded-br-md border-gray-200 focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="col-span-6">
                <button className="block w-full font-semibold rounded-md bg-black p-2.5 text-sm bg-primary text-[white] transition hover:shadow-lg">
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div> */}



      </div>
    </section>
  );
};

export default CheckoutForm;
