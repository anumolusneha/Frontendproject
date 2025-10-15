import React from 'react';
import './styles.css';

const RegisterForm = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Register</h2>
        <div className="input-group">
          <input type="text" id="full-name" name="full-name" placeholder="Full Name" />
        </div>
        <div className="input-group">
          <input type="text" id="username" name="username" placeholder="Username" />
        </div>
        <div className="input-group">
          <input type="email" id="email" name="email" placeholder="Email" />
        </div>
        <div className="input-group">
          <input type="tel" id="phone-number" name="phone-number" placeholder="Phone Number" />
        </div>
        <div className="input-group">
          <input type="password" id="password" name="password" placeholder="Password" />
        </div>
        <div className="input-group">
          <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" />
        </div>
        <button type="submit" className="register-button">REGISTER</button>
      </form>
    </div>
  );
};

export default RegisterForm;
