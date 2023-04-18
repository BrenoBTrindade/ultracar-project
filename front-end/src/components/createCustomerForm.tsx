import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCustomerRequest } from '../services/login';
import '../css/login.css'


function CreateCustomer() {
  const [username, setUsername] = useState('');
  const [role] = useState('customer');
  const navigate = useNavigate();

  const handleCreate = async (event: any) => {
    event.preventDefault();
    createCustomerRequest(username, role)
    navigate({pathname: '/main'})
  }

  return (
    <div className="login-page">
      <form className='login-section'>
        <input
          type="text"
          placeholder="Usuário"
          value={ username }
          onChange={ ({ target }) => setUsername(target.value) }
        />
        <div className="login-buttons">
          <button
            type="button"
            onClick={(event) => handleCreate(event)}
            >
              Registrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateCustomer;