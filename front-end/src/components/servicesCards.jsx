import { useEffect, useState } from "react";
import { servicesRequest } from "../services/login";

function ServicesCards() {
  const [services, setServices] = useState([])

  const request = async () => {
    const employeeId = localStorage.getItem('id');
    const { allServices } = await servicesRequest(employeeId);
    setServices(allServices)
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <div>
      {services.map((service, index) => (
        <div key={index}>
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