import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createServiceRequest, partsRequest } from '../services/services';
import '../css/login.css'

function CreateServiceForm() {
  const [username, setUsername] = useState('');
  const [carModel, setCarModel] = useState('');
  const [description, setDescription] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [parts, setParts] = useState([])
  const navigate = useNavigate();

  const handleCreate = async (event:any) => {
    const local = localStorage.getItem('id') || '';
    const employeeId = JSON.parse(local)
    if (!local) return 2
    event.preventDefault();
    await createServiceRequest(username, carModel, employeeId, description, totalPrice);
    navigate({pathname: '/main'})
    
  }

  const request = async () => {
    const allparts = await partsRequest()
    localStorage.setItem('parts', JSON.stringify(allparts))
    if(!allparts) return ''
    setParts(allparts)
  }

  useEffect(() => {
    request()
  }, []);

  return (
    <div className="login-page">
      <form className='login-section'>
        <input
          type="text"
          placeholder="Nome"
          value={ username }
          onChange={ ({ target }) => setUsername(target.value) }
        />
        <input
          type="text"
          placeholder="Carro"
          value={ carModel}
          onChange={ ({ target }) => setCarModel(target.value) }
        />
        <input
          type="text"
          placeholder="descricao"
          value={ description }
          onChange={ ({ target }) => setDescription(target.value) }
        />
        <div className="price-buttons">
        {parts.map((part:any, index) => (
          <button
            type='button'
            key={index}
            onClick={() => setTotalPrice(part.price)}
          >
            {`${part.name} R$: ${part.price}`}
          </button>
        
          ))}
        </div>
        <p>{totalPrice}</p>
        <input
          type="text"
          placeholder="Editar preco do servico"
          value={ totalPrice }
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