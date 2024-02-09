import React, { useRef, useState } from 'react';
import OpportunityList from './OpportunityList';
import OpportunityDetail from './OpportunityDetail';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

function Dashboard({ userData }) {
    const detailRef = useRef(null);
    const [selectedOpportunity, setSelectedOpportunity] = useState(0);

    const handleOpportunitySelect = (index) => {
        setSelectedOpportunity(index);
        detailRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='flex'>
            <Sidebar/>
            <div className='dash h-full w-full ml-20 lg:ml-72'>
                <Topbar userdata={userData} />
                <div className="main-content flex flex-col w-full h-full md:flex-row md:items-start items-center">
                    <div className='w-auto md:w-1/2 mb-10 sm:mb-0'><OpportunityList onSelect={handleOpportunitySelect} selected={selectedOpportunity} /></div>
                    <div className='w-auto md:w-1/2 h-full' ref={detailRef}><OpportunityDetail  opportunity={selectedOpportunity} /></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;