import React, { useState } from "react";
import Link from "next/link";
import Loader from "../layout/ButtonLoader";

import { signIn } from "next-auth/client";

import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  console.log({ email, password });

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false, // prevent the redirection of the user in case login fails
      email,
      password,
    });

    setLoading(false);

    if (result.error) {
      toast.error(result.error);
    } else {
      window.location.href = "/";
    }
  };
  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={submitHandler}>
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a href="#" className="float-right mb-4">
              Forgot Password?
            </a>

            <button
              id="login_button"
              type="submit"
              className="py-3 btn btn-block"
              disabled={loading ? true : false}
            >
              {loading ? <Loader /> : "LOGIN"}
            </button>

            <Link href="/register" className="float-right mt-3">
              <a>New User?</a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};



export default Login;
