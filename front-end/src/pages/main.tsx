import { useNavigate } from "react-router-dom";
import ServicesCards from "../components/services";
import Header from "../components/header";
import '../css/services.css'

function Main() {
  const navigate = useNavigate()
  const handleNavigate = async (event:any) => {
    event.preventDefault();
    navigate({pathname: '/register'})
    
  }

  return (
    <section>
      <Header / >
      <div>
        <ServicesCards />
      </div>
      <div className="service-buttons">
        <button onClick={ handleNavigate }>
          Registrar servico
        </button>
      </div>
    </section>
  );
}

export default Main;