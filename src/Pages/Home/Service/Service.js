import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { name, id, img, price, description } = service;
  return (
    <div className='service'>
      {/* <h3>{id}</h3> */}
      <img src={img} alt='' />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <p className='px-3 text-center'>{description}</p>
      <Link to={`/booking/${id}`}>
        <button className='btn btn-outline-dark'>
          {name.slice(0, 1).toUpperCase()}
          {name.slice(1).toLowerCase()}
        </button>
      </Link>
    </div>
  );
};

export default Service;
<h1>Single Services</h1>;
