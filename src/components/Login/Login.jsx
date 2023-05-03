import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Login() {
  const { signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    signInUser(email, password)
      .then((result) => console.log(result.user))
      .catch((err) => console.log(err));
    // TODO: Add logic to submit the form data
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <form className="w-full max-w-sm mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="mb-4 relative">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button
          className="absolute right-0 top-7 mt-3 mr-4"
          type="button"
          onClick={handlePasswordVisibility}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={20} />
          ) : (
            <AiOutlineEye size={20} />
          )}
        </button>
      </div>
      <div className="flex items-center justify-center">
        <AwesomeButton type="danger" size="medium">
          {" "}
          Sign In
        </AwesomeButton>
      </div>
      <p>
        Not have an account{" "}
        <Link to="/register" className="text-blue-500 underline">
          Register
        </Link>{" "}
        now
      </p>
    </form>
  );
}

export default Login;
