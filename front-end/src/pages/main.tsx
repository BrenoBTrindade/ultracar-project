import { useNavigate } from "react-router-dom";
import ServicesCards from "../components/servicesCards";


function Main() {
  const navigate = useNavigate()
  const handleNavigate = async (event:any) => {
    event.preventDefault();
    navigate({pathname: '/register'})
    
  }

  return (
    <section>
      <div>
        <ServicesCards />
      </div>
      <div>
        <button onClick={ handleNavigate }>
          Registrar servico
        </button>
      </div>
    </section>
  );
}

export default Main;