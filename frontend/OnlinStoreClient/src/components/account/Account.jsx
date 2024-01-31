import React from 'react';
import './Account.css';

const Account = ({ users = [] }) => {

  return (
    <div className='users'>
                {""}
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
  );
}

export default Account;