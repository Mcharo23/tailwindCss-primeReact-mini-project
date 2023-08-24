import { FC, useState } from "react";
import CustomInputField from "../components/inputField";
import PasswordInputField from "../components/password-input-field";
import CustomButton from "../components/custom-button";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import LinkButton from "../components/link-button";
import { useNavigate } from "react-router-dom";

const Login: FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleRememberMeCheck = (e: CheckboxChangeEvent) => {
    if (e.checked) {
      setRememberMe(e.value);
    } else {
      setRememberMe("");
    }
  };

  const handleForgotPasswordOnClick = () => {
    navigate("/reset-password");
  };

  const handleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      if (validation()) {
        navigate("/home");
      }
    }, 1000);
    setLoading(false);
  };

  const validation = () => {
    console.log(username.length);
    if (username.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  console.log(username);
  console.log(rememberMe);
  console.log(password);

  return (
    <form className="w-full h-screen bg-primary text-blue-700 items-center flex justify-center">
      <div className="bg-slate-300 flex flex-row w-5/6 h-4/6 shadow-2xl">
        <div className="  w-1/2 h-full  items-center justify-center">
          <img
            src="./src/assets/images/Shoping-cart2.jpg"
            alt="shipping cart"
            className="h-full w-full"
          />
        </div>

        <div className="w-1/2 h-full justify-center items-center flex flex-col gap-6">
          <div className=" w-5/6 items-center justify-center text-center mb-6">
            <h1 className="text-blue-600 text-3xl">Welcome to InstaShin</h1>
            <small className="italic text-base">Ship Smarter Today</small>
          </div>
          <CustomInputField
            onChange={handleUsernameChange}
            name={"Username or email"}
            type={"email"}
          />
          <PasswordInputField
            onChange={handlePasswordChange}
            name={"Password"}
          />
          <div className=" w-5/6 flex flex-row">
            <div className="flex-1 flex">
              <Checkbox
                inputId="Remember me"
                name="Remember me"
                value="Remember me"
                onChange={handleRememberMeCheck}
                checked={rememberMe.includes("Remember me")}
                className="border border-blue-400"
              />
              <label htmlFor="Remember me" className="ml-2 text-stone-700">
                Remember me
              </label>
            </div>
            <div>
              <LinkButton onClick={handleForgotPasswordOnClick} />
            </div>
          </div>
          <CustomButton
            label={"Sign in"}
            progress={loading}
            onClick={handleSignIn}
            icon={"pi pi-sign-in"}
            borderRadius={""}
            backgroundColor={"#1A2385"}
            border={"0"}
          />
        </div>
      </div>
    </form>
  );
};

export default Login;
