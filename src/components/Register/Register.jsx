import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { CiBullhorn } from "react-icons/ci";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Register() {
  const { createUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6)
      setError("Password must be at least 6 character long.");
    else setError("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Password:", photoURL);

    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
    // TODO: Add logic to submit the form data
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <form className="w-full max-w-sm mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
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
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10 ${
            error ? "border-b-red-500" : "border-b-green-500"
          }`}
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          required
        />
        {error && (
          <p className="text-red-500">
            <CiBullhorn></CiBullhorn>
            {error}
          </p>
        )}
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

      <div className="mb-4 relative">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Photo URL
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
          id="photoURL"
          name="photoURL"
          type="url"
          placeholder="photo URL"
          value={photoURL}
          onChange={(event) => setPhotoURL(event.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <AwesomeButton type="danger" size="medium">
          {" "}
          Sign In
        </AwesomeButton>
      </div>
      <p>
        Have an account{" "}
        <Link to="/login" className="text-blue-500 underline">
          Login
        </Link>
      </p>
    </form>
  );
}

export default Register;
