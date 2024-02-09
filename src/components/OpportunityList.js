import React from 'react';
import opportunitiesData from '../data/opportunitiesData.json';

function OpportunityList({ onSelect, selected }) {
  return (
    <div className='w-auto h-full'>
      <ul className='flex flex-col gap-6'>
        {/* Map function to print all the list components */}
        {opportunitiesData.map((opportunity, index) => (
          <li key={index} onClick={() => onSelect(index)} className={selected === index ? 'component p-3 sm:p-7 border-none rounded-xl shadow-[0_0px_15px_rgba(8,_112,_184,_0.7)]' : 'p-3 sm:p-7 border-none rounded-xl shadow-[0_0px_5px_rgba(8,_112,_184,_0.7)]'}>
            <div className='flex items-center gap-2 sm:gap-6'>
              <img className='w-16 rounded-full h-16' src={opportunity.img} alt="" />
              <p className='text-xl sm:text-2xl font-bold'>{opportunity.title}</p>
            </div>
            <div className='my-5 flex items-start justify-between flex-col sm:flex-row sm:items-center'>
              <p className='my-2'><span className='font-semibold text-lg'>Company name: </span>{opportunity.company}</p>
              <p className='text-xl'><span className='font-semibold'>Amount: </span>{opportunity.amount}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OpportunityList;