import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../services/login';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [role] = useState('employee');
  const [validate, setValidate] = useState(false)
  const navigate = useNavigate();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    const {token, employeeId} = await loginRequest(username, role);
    if ( !token )  return setValidate(true)
    localStorage.setItem('user', JSON.stringify(username))
    localStorage.setItem('token', JSON.stringify(token))
    localStorage.setItem('id', JSON.stringify(employeeId))
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
        {validate && <span>Funcionario não existe</span>}
        <div className="login-buttons">
          <button
            type="button"
            onClick={(event) => handleLogin(event)}
            >
              Entrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;