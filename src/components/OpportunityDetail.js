import React from 'react';
import opportunitiesData from '../data/opportunitiesData.json';

function OpportunityDetail({ opportunity }) {
  const { title, description, img, company, amount, MinimumInvestment, Duration, ResearchMilestones, ExitStrategy, ContactInfo, InvestmentPlatforms } = opportunitiesData[opportunity];

  return (
    <div className='w-auto p-5 bg-gradient-to-r from-purple-950 to-fuchsia-800 rounded-lg shadow-[0_0px_10px_rgba(8,_112,_184,_0.7)] h-full md:h-auto flex flex-col gap-4'>
      <div className='flex items-center gap-2 sm:gap-6 font-semibold'>
        <img className='w-16 rounded-full h-16 sm:w-28 sm:h-28' src={img} alt="" />
        <p className='text-xl sm:text-3xl'>{title}</p>
      </div>
      <div>
        <p className='text-lg'><span className='font-semibold'>Company: </span>{company}</p>
        <p className='text-lg'><span className='font-semibold'>Amount: </span>{amount}</p>
        <p className='text-lg'><span className='font-semibold'>Description: </span>{description}</p>
      </div>
      <div className='flex gap-3 flex-col xl:flex-row'>
        <div className='w-full xl:w-1/2 flex flex-col gap-2'>
          <li className='font-bold'>Terms and Conditions</li>
          <div>
            <p><span className='font-semibold'>Minimum Investment: </span>{MinimumInvestment}</p>
            <p><span className='font-semibold'>Duration: </span>{Duration}</p>
            <p><span className='font-semibold'>Research: </span>{ResearchMilestones}</p>
            <p><span className='font-semibold'>Exit Strategy: </span>{ExitStrategy}</p>
          </div>
        </div>
        <div className='w-full xl:w-1/2 flex flex-col gap-2'>
          <li className='font-bold'>How to participate</li>
          <div>
            <p><span className='font-semibold'>Contact Info: </span>{ContactInfo}</p>
            <p><span className='font-semibold'>Investment Platforms: </span>{InvestmentPlatforms}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpportunityDetail;