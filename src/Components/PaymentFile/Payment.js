import React from 'react';
import CheckoutForm from '../../Pages/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(process.env.STRIPELINK);
console.log(stripePromise);

const Payment = () => {
    const data = { id: 1, name: 'pronoy', email: 'pronoy12@gmail.com', price: 200 };

    return (
        <div>
            <div className='font-serif flex justify-center items-center mt-12'>
                <div>
                    {/* className='w-2/3 p-4  border-solid border-2 border-sky-500' */}
                    {/* <h1 className='text-2xl  font-bold'>payment For:- {data.name} </h1> */}
                    {/* <h1 className='text-xl font-semibold mb-4'>Please pay:- BDT {data.price} </h1> */}

                    <Elements
                        stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;