import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { TiInputCheckedOutline, TiInfo } from "react-icons/ti";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

function Login() {
  const [error, setError] = useState("");
  const { signInUser, auth } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Email:", email);
    // console.log("Password:", password);

    signInUser(email, password)
      .then((result) => {
        // setUser(result.user);
        console.log("sata");
        setError("");
        navigate(location?.state?.pathname || "/");
      })
      .catch((err) =>
        setError(
          err.message
            .slice(22, err.message.length - 2)
            .split("-")
            .join(" ")
        )
      );
    // TODO: Add logic to submit the form data
  };

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => console.log(err));
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
        <Link
          to="/register"
          state={location.state}
          className="text-blue-500 underline"
        >
          Register
        </Link>{" "}
        now
      </p>
      {error && (
        <p className="flex gap-2 items-center mt-3 text-red-500  text-sm uppercase">
          <TiInfo className="text-xl"></TiInfo>
          {error}
        </p>
      )}
      <div>
        <button onClick={handleGoogleSingIn}>Google</button>
        <button onClick={handleGithubSignIn}>Github</button>
      </div>
    </form>
  );
}

export default Login;
