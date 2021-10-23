import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
  { id: 101, img: mechanic1, name: 'Andrew Smith', expertize: 'Engine-Expert' },
  {
    id: 102,
    img: mechanic2,
    name: 'John Anderson',
    expertize: 'Polish-Expert',
  },
  {
    id: 103,
    img: mechanic3,
    name: 'Carlos Donga',
    expertize: 'Service-Expert',
  },
  {
    id: 104,
    img: mechanic4,
    name: 'Sam Andres',
    expertize: 'OilChanger-Expert',
  },
  { id: 105, img: mechanic5, name: 'Robinson', expertize: 'Cleaning-Expert' },
];

const Experts = () => {
  return (
    <div className='container mt-5'>
      <h2 className='text-primary text-center'>OurExperts</h2>
      <div className='row'>
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
<h2>OurExperts</h2>;
