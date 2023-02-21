import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./SignUp.scss";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { signUpStart } from "../../Store/user/user.action";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser, selectUserAuthError } from "../../Store/user/user.selector";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();
  const userError = useSelector(selectUserAuthError);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(signUpStart(email, password, displayName));
      navigate("/");
    } catch(error) {
        console.log('user creation encountered an error', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          errorMessage="*Username must be at least 3 characters and shouldn't include any special character!"
          pattern="^[A-Za-z_ ]{3,}$"
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
         {userError && userError.code === "auth/email-already-in-use" && (
          <p className="error">*Email already exists. Please try another.</p>
        )}

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          errorMessage="*Password should be atleast 6 digits!"
          pattern="[0-9a-zA-Z]{6,}"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          errorMessage="*Passwords didn't match!"
          pattern={formFields.password}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
