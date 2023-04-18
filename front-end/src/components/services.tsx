import { useEffect, useState } from "react";
import { servicesRequest } from "../services/login";
import { useNavigate } from "react-router-dom";
import '../css/services.css'

function ServicesCards() {
  const name = localStorage.getItem('user') || ''
  const username = JSON.parse(name)
  const [services, setServices] = useState([])
  const navigate = useNavigate()

  const request = async () => {
    const employeeId = localStorage.getItem('id');
    if (!employeeId) return navigate({pathname: '/'})
    const { allServices } = await servicesRequest(employeeId);
    setServices(allServices)
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <div className="services">
      {services.map((service: any, index) => (
        <div className="services-container" key={index}>
          <h3>Serviço de {username} </h3>
          <p>
            {service.customer.username}
          </p>
          <p>
            {service.carModel}
          </p>
          <p>
            {service.description}
          </p>
          <p>
            preco: 
            {service.totalPrice}
          </p>
          <p>
            data Inicio:
            { service.createdAt }
          </p>
          <p>
            data final:
            { service.updatedAt }
          </p>
        </div>
      ))}
    </div>
  )
}

export default ServicesCards;