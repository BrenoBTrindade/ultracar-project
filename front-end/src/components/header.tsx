import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/header.css'

function Header() {
 const user = localStorage.getItem('user')|| '';
 const userName = JSON.parse(user)
 const navigate = useNavigate()
  return (
    <section className='header-container'>
       <img src="https://scontent.fbel11-1.fna.fbcdn.net/v/t39.30808-1/317830808_578965760902902_3043973350016106892_n.png?stp=dst-png_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=c6021c&_nc_ohc=bukjbN0YHtgAX_KeMoj&_nc_ht=scontent.fbel11-1.fna&oh=00_AfB5wOhDjhpZf8BlzCLmTggCAqX82YmQicbRjWbfeukFLA&oe=6443EE77" alt="foto" />
        <div className='section-2'>
          <h4>{userName}</h4>
          <button
            type='button'
            onClick={() => navigate({pathname: '/login'})}
          >
            Sair
          </button>
      </div>
    </section>
  );
}

export default Header;