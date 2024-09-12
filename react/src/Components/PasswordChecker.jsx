import React, { useState } from 'react';

function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(null);

  const validatePassword = (password) => {
    // Example validation logic:
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;

    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar && isLongEnough;
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValid(validatePassword(newPassword));
  };

  return (
    <div>
      <h2>Password Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <p>
        {isValid === null ? '' :
         isValid ? 'Password is valid' : 'Password is invalid'}
      </p>
      <div>
        <button >submit</button>
      </div>
    </div>
  );
}

export default PasswordChecker;
