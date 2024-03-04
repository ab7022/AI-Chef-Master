import React, { Component } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SpinnerCircular } from "spinners-react";
import "../SineUpForm/index.css";
class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  handleTogglePassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const { id, label, name } = this.props;
    const { showPassword } = this.state;

    return (
      <div className="mt-2 relative">
        <label htmlFor={id} className="block text-sm font-medium">
          {label}
        </label>
        <div className="mt-2 relative">
          <input
            id={id}
            name={name}
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-2 py-1.5 shad6ow-sm"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {showPassword ? (
              <FiEyeOff
                onClick={this.handleTogglePassword}
                className="text-gray-500 cursor-pointer"
              />
            ) : (
              <FiEye
                onClick={this.handleTogglePassword}
                className="text-gray-500 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: true });
    }, 1000);
  }

  render() {
    const { loading } = this.state;

    return (
      <>
        {loading ? (
          <div className="signup-background shadow-lg  flex min-h-calc(100%-80px) flex-1 flex-col justify-center bg-black px-6 py-12 lg:px-8">
            <div className="shadow-2xl card max-sm-auto m-auto">
              <div className="card-body">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <img
                    className="mx-auto h-25 w-25 rounded-full"
                    src="https://media.istockphoto.com/id/1205650605/vector/master-chef-symbol.jpg?s=612x612&w=0&k=20&c=5-Ve09633yClmlP02mOwiIPC3Tn3mCyxcut5WvDU6Wo="
                    alt="AI CHEF MASTER"
                  />
                  <h2 className="mt-10 text-center text-3xl font-bold  ">
                    Create your account
                  </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form
                    className="space-y-6 text-black"
                    action="#"
                    method="POST"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium"
                      >
                        Email address
                      </label>
                      <div className="mt-2 ">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-2 py-1.5 shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="">
                      <div className="mt-2">
                        <PasswordInput
                          id="password"
                          label="Password"
                          name="password"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="mt-2">
                        <PasswordInput
                          id="conformpassword"
                          label="Confirm Password"
                          name="conformpassword"
                        />
                      </div>

                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          required
                          className="form-checkbox h-6 w-6"
                        />
                        <label
                          htmlFor="checkbox"
                          className="ml-2 block text-sm font-medium"
                        >
                          I agree to the terms and conditions
                        </label>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign Up
                      </button>
                    </div>

                    <div className="flex justify-evenly items-center">
                      <p className=" justify-center text-sm font-medium  ">
                        Already have an account?
                      </p>
                      <button className=" bg-sky-500 hover:bg-dark-700 rounded-md px-4 py-2">
                        <a href="/login" className="no-underline text-white">
                          Sign In <i className="fa-solid fa-caret-right"></i>
                        </a>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center p-5">
            <SpinnerCircular />
          </div>
        )}
      </>
    );
  }
}

export default SignUpForm;
