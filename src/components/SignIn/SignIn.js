import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./SignIn.scss";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../Store/user/user.action";
import { useNavigate } from "react-router-dom";
import { selectUserAuthError } from "../../Store/user/user.selector";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();
  const userError = useSelector(selectUserAuthError);

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      navigate("/");
    } catch (error) {
      alert("sign in failed", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      {userError && userError.code === "auth/user-not-found" && (
        <p className="error">*Enter valid email</p>
      )}
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        {userError && userError.code === "auth/wrong-password" && (
          <span className="error">*Incorrect Password</span>
        )}
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
