import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);
  return (
    <div>
      <h2 className='text-primary mt-5 text-center'>Our Services</h2>
      <div className='service-container'>
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
