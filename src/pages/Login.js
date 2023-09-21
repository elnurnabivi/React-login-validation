import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [isUserNameTouched, setIsUserNameTouched] = useState(false);
  const enteredUserNameIsValid = userName.trim() !== "";
  const isUserNameIsInvalid = isUserNameTouched && !enteredUserNameIsValid;
  const userNameInputChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userNameInputBlurHandler = () => {
    setIsUserNameTouched(true);
  };

  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const enteredPasswordIsValid = password.trim() !== "";
  const isPasswordIsInValid = isPasswordTouched && !enteredPasswordIsValid;
  const passwordInputChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const passwordInputBlurHandler = () => {
    setIsPasswordTouched(true);
  };
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setIsUserNameTouched(true);
    setIsPasswordTouched(true);
    if (!enteredUserNameIsValid || !enteredPasswordIsValid) {
      console.log("The form is not valid");
      setFormSubmitted(true);
      return;
    }
    console.log("Submit form");
    setFormSubmitted(false);
  };

  return (
    <form className="" onSubmit={submitForm}>
      <div>Login page</div>
      <div>
        <label htmlFor="userName">Username: </label>
        <input
          type="text"
          name="userName"
          onChange={userNameInputChangeHandler}
          onBlur={userNameInputBlurHandler}
          value={userName}
        />
        {isUserNameIsInvalid && <p>Username should not be empty</p>}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={passwordInputChangeHandler}
          onBlur={passwordInputBlurHandler}
          value={password}
        />
        {isPasswordIsInValid && <p>Password should not be empty</p>}
      </div>
      <button type="submit">Submit</button>
      {formSubmitted &&
        (!enteredUserNameIsValid || !enteredPasswordIsValid) && (
          <p>Form cannot be submitted</p>
        )}
    </form>
  );
}

export default Login;
