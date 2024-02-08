/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Spinner } from '../../Components/LoadingPage';
import './style.css'

const Login = () => {
  const navigate = useNavigate ();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailEmpty(!value.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setIsEmailEmpty(true);
      return;
    }

    if (!password.trim()) {
      setIsPasswordEmpty(true);
      return;
    }
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if(data.code === 400) {
        setLoginAlert(data.message)
      }
      if(data.code === 200) {
        localStorage.setItem("authorization", data.data.token)
        navigate('/dashboard')
      }

      // Handle the response, e.g., show success message or redirect to another page
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, e.g., show error message to the user
    } finally {
      // Hide loading page
      setLoading(false);
    }
  };

  return (
    <>
    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white outline-under-title">
      Sign in to your account
    </h1><form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
          {(isEmailEmpty || loginAlert) && <p className="text-xs text-red-500 italic">{loginAlert || 'Please input your mail account'}</p>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {isPasswordEmpty && <p className="text-xs text-red-500 italic">Please input your password</p>}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
            </div>
          </div>
          <a href="/reset-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
        </div>
        <button type="button" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full">{loading && <Spinner />} Sign in</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
        </p>
      </form></>
  );
};
export default Login;