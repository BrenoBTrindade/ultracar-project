import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createServiceRequest } from '../services/services';

function CreateServiceForm() {
  const [username, setUsername] = useState('');
  const [carModel, setCarModel] = useState('');
  const [description, setDescription] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const navigate = useNavigate();

  const handleCreate = async (event: any) => {
    const local = localStorage.getItem('id') || '';
    const employeeId = JSON.parse(local)
    if (!local) return 2
    event.preventDefault();
    await createServiceRequest(username, carModel, employeeId, description, totalPrice);
    navigate({pathname: '/main'})
    
  }

  return (
    <div>
      <form className='login-section'>
        <input
          type="text"
          placeholder="Usuário"
          value={ username }
          onChange={ ({ target }) => setUsername(target.value) }
        />
        <input
          type="text"
          placeholder="Car"
          value={ carModel}
          onChange={ ({ target }) => setCarModel(target.value) }
        />
        <input
          type="text"
          placeholder="description"
          value={ description }
          onChange={ ({ target }) => setDescription(target.value) }
        />
        <input
          type="text"
          placeholder="Price"
          value={ totalPrice}
          onChange={ ({ target }) => setTotalPrice(target.value) }
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

export default CreateServiceForm;