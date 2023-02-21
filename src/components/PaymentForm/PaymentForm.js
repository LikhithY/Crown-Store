import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Button from "../Button/Button";
import { FormContainer, PaymentFormContainer } from "./PaymentForm.styles";

const PaymentForm = () => {

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType="inverted"> Pay now </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
