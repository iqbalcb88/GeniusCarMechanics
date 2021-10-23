import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';

const NotFound = () => {
  return (
    <div>
      <div>
        <img width='50%' src={notFound} alt='' />
      </div>
      <Link to='/'>
        <button
          className='bg-primary text-white border-1
        rounded btn-lg border-danger mt-3'
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
