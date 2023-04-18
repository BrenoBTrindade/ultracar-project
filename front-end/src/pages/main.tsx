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

  const handleCustomerForm = async (event: any) => {
    navigate({pathname: '/createCustomer' })
  }

  return (
    <section>
      <Header / >
      <div className="service-buttons">
        <button onClick={ handleNavigate }>
          Registrar servico
        </button>
        <button onClick={handleCustomerForm}>
          Registrar Cliente
        </button>
      </div>
      <div>
        <ServicesCards />
      </div>
    </section>
  );
}

export default Main;