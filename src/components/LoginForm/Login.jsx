import React from "react";
import { useContext, useState } from "react";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { MessageContext } from "../../context/message.context";
import "./Login.css";

const Loginform = () => {
  const [loginData, setLoginData] = useState({
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);
  const { showMessage } = useContext(MessageContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    authService
      .login(loginData)
      .then(({ data }) => {
        storeToken(data.authToken);
        authenticateUser();
        showMessage("Welcome!! Find your new favourite restaurant!!");
        navigate("/home");
      })
      .catch((error) => (error));
  };

  const handleInputChange = (e) => {
    const { value, name } = e.currentTarget;
    setLoginData({ ...loginData, [name]: value });
  };

  const { password, email } = loginData;

  return (
    <>
      <div class="background">
        <div>
          {" "}
          <img class="logo" src="/logo.jpg" />
        </div>

        <form className="formLogging" onSubmit={handleSubmit}>
          <div className="login" controlId="email">
            <label className="text1">Email</label>
            <input
              type="email"
              onChange={handleInputChange}
              name="email"
              value={email}
              placeholder="email"
            />
          </div>

          <div className="login" controlId="password">
            <label className="text1">Password</label>
            <input
              type="password"
              onChange={handleInputChange}
              name="password"
              value={password}
              placeholder="password"
            />
          </div>

          <button className="button1" type="submit">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default Loginform;
