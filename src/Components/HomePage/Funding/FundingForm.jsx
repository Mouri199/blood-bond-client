import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';

import Swal from 'sweetalert2';

const FundingForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure =useAxiosSecure ()

    useEffect(()=>{
        axiosSecure.post('/create-payment')
    },[])
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
            Swal.fire("", "Payment successfull", "success")
          e.reset()
        }
    }


    return (
        <form className='max-w-[500px] mx-auto my-16' onSubmit={handleSubmit}>
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
            <button className="bg-redclr text-lg lg:w-[200px] my-5  rounded-lg lg:p-1" type="submit" disabled={!stripe}>
                Pay
            </button>
            <p className='text-red-600 text-lg'>{error}</p>
        </form>
    );
};

export default FundingForm;