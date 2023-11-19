import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// TODO: add publishable key (PK) from website
const stripePromise = loadStripe('');

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="payment"
        subHeading="Please pay here to order"
      ></SectionTitle>
      <div className="min-h-screen max-w-4xl mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};
export default Payment;
