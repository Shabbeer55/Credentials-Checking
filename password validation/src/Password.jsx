import React, { useState } from 'react';


const Password = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailFormat = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    if (!emailFormat.test(email) || !validatePassword.test(password)) {
      setError("Invalid Credentials");
    } else {
      setError("Successfully logged in");
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="email">Enter Your Email Id</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={changeEmail}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Enter Your Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={changePassword}
        />
      </div>
      <span className="error-message">{error}</span>
      <button onClick={submit}>Enter</button>
    </div>
  );
};

export default Password;