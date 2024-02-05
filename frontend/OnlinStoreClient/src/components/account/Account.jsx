import React, { useState } from 'react';
import './Account.css';

const Account = ({ users = [] }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegistrationForm(false);
  };

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
    setShowLoginForm(false);
  };

  return (
    <div className='account'>
      <div className='buttons'>
        <button onClick={toggleLoginForm}>Logowanie</button>
        <button onClick={toggleRegistrationForm}>Rejestracja</button>
      </div>

      {showLoginForm && (
        <form className='login-form'>
          {}
          <h2>Formularz logowania</h2>
          <input type='text' placeholder='Nazwa użytkownika' />
          <input type='password' placeholder='Hasło' />
          <button type='submit'>Zaloguj</button>
        </form>
      )}

      {showRegistrationForm && (
        <form className='registration-form'>
          {}
          <h2>Formularz rejestracji</h2>
          <input type='text' placeholder='Nazwa użytkownika' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Hasło' />
          <button type='submit'>Zarejestruj</button>
        </form>
      )}

      <div className='users'>
        {users.map((user) => (
          <div key={user.id} className='user'>
            <div className='description'>
              <p>
                <b>Nazwa użytkownika {user.username} </b>
              </p>
              <p>
                <b>Email: {user.email} </b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
