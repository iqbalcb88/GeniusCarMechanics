import React from 'react';

const Expert = ({ expert }) => {
  const { name, img, expertize } = expert;
  return (
    <div className='col-lg-4 col-sm-6 col-12 my-5'>
      <img src={img} alt='' />
      <h2>Name:{name}</h2>
      <h5 className='text-danger'>{expertize}</h5>
    </div>
  );
};

export default Expert;
<h2>Expert</h2>;
