import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import FundingForm from "./FundingForm";

const stripePromise = loadStripe(import.meta.env.VITE_Paymet_Key)
const Funding = () => {
    
    return (
        <div>
            <div>
                <h3 className="text-4xl text-center font-semibold">Do you want to funding?</h3>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <FundingForm></FundingForm>
                </Elements>
            </div>
        </div>
    );
};

export default Funding;