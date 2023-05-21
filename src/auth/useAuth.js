import { useState } from 'react';

export function useAuth() {
  const Api = 'http://localhost:4000/api/v1/users/';

  const [showPassword, setShowPassword] = useState(true);
  const [login, setLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const toggleLogin = () => {
    setLogin((prev) => !prev);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (login) {
      try {
        const response = await fetch(`${Api}login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });

        const data = await response.json();

        if (data.status === 'fail') {
          setError(data.message);
          setLoading(false);
          return;
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else if (!login) {
      try {
        const response = await fetch(`${Api}signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...signUpData,
            passwordConfirm: signUpData.password,
          }),
        });

        const data = await response.json();

        if (data.status === 'fail' || data.status === 'error') {
          setError(data.message);
          setLoading(false);
          return;
        }
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    setLoginData({
      email: '',
      password: '',
    });
    setSignUpData({
      name: '',
      email: '',
      password: '',
    });
    setLoading(false);
  };

  const handleLoginData = (e, value) => {
    setError('');
    setLoading(false);
    setLoginData((prev) => ({
      ...prev,
      [value]: e.target.value,
    }));
  };

  const handleSignUpData = (e, value) => {
    setError('');
    setLoading(false);
    setSignUpData((prev) => ({
      ...prev,
      [value]: e.target.value,
    }));
  };

  return {
    showPassword,
    login,
    error,
    loginData,
    setLoginData,
    signUpData,
    setSignUpData,
    handleClickShowPassword,
    toggleLogin,
    handleSubmit,
    loading,
    handleLoginData,
    handleSignUpData,
  };
}
