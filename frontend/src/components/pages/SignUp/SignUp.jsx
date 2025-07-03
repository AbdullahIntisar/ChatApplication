import React, { useState } from "react";
import GenderCheck from "./GenderCheck";
import { Link } from "react-router-dom";
import useSignUp from "../../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
  const { loading, signup } = useSignUp();
  const handleCheckBoxGender = (gender) => {
    setInputs({ ...inputs, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(inputs);
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center mix-w-96 mx-auto">
      <div>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Sign Up
            <span className="text-blue-500"> ChatApp</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Abdullah"
                className="w-full input input-bordered h-10"
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text text-white ">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Abdullah"
                className="w-full input input-bordered h-10"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text text-white">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text text-white">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full input input-bordered h-10"
                value={inputs.confirmpassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmpassword: e.target.value })
                }
              />
            </div>
            <GenderCheck
              onCheckBoxChange={handleCheckBoxGender}
              selectedGender={inputs.gender}
            />
            <Link
              to={"/login"}
              className="text-sm hover:underline hover:text-blue-300 mt-4 inline-block text-white"
            >
              Already have an account?
            </Link>

            <div>
              <button
                className="btn btn-block btn-sm mt-2 border border-slate-700"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
