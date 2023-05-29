import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

export function useAuth() {
  const Api = 'http://localhost:4000/api/v1/users/';
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState(true);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

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
    setError('');
    setLogin((prev) => !prev);
  };

  const loginHandler = async () => {
    if (
      loginData.email.trim() === '' ||
      loginData.password.trim() === ''
    ) {
      setError('Please provide email and password!');
      return;
    }
    setLoading(true);
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
      dispatch(authActions.loginUser(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const signupHandler = async () => {
    if (
      signUpData.email.trim() === '' ||
      signUpData.password.trim() === '' ||
      signUpData.name.trim() === ''
    ) {
      setError('Please make sure you provide all fields!');
      return;
    }
    setLoading(true);

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
      dispatch(authActions.loginUser(data));
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const clearFields = () => {
    setLoginData({
      email: '',
      password: '',
    });
    setSignUpData({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (login) {
      loginHandler();
    } else if (!login) {
      signupHandler();
    }
    clearFields();
  };

  const handleLoginData = (e, value) => {
    setError('');
    setLoginData((prev) => ({
      ...prev,
      [value]: e.target.value,
    }));
  };

  const handleSignUpData = (e, value) => {
    setError('');
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
