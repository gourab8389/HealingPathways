import { IconCircleDashedCheck, IconHourglassHigh, IconUserScan } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import MetricsCard from './metricsCard';


const DisplayInfo = () => {

  const navigate = useNavigate();

    const [metrics, setMetrics] = useState({
        totalFolders: 0,
        aiPersonalizedTreatment: 0,
        totalScreenings: 0,
        completedScreenings: 0,
        pendingScreenings: 0,
        overdueScreenings: 0
    })
    const metricsData = [
        {
            title: "Specialist Appointments Pending",
            subtitle: "View",
            value: metrics.pendingScreenings,
            icon:IconHourglassHigh,
            onclick: () => navigate('/appointments/pending')
        },
        {
            title: "Treatment Process Update",
            subtitle: "View",
            value: `${metrics.completedScreenings} of ${metrics.totalScreenings}`,
            icon:IconCircleDashedCheck,
            onclick: () => navigate('/appointments/progress')
        },
        {
            title: "Total Folders",
            subtitle: "View",
            value: metrics.totalFolders,
            icon:IconCircleDashedCheck,
            onclick: () => navigate('/folders')
        },
        {
            title: "Total Screenings",
            subtitle: "View",
            value: metrics.totalScreenings,
            icon:IconUserScan,
            onclick: () => navigate('/screenings')
        },
        {
            title: "Completed Screenings",
            subtitle: "View",
            value: metrics.completedScreenings,
            icon:IconUserScan,
            onclick: () => navigate('/screenings/completed')
        },
        {
            title: "Pending Screenings",
            subtitle: "View",
            value: metrics.pendingScreenings,
            icon:IconUserScan,
            onclick: () => navigate('/screenings/pending')
        },
        {
            title: "Overdue Screenings",
            subtitle: "View",
            value: metrics.overdueScreenings,
            icon:IconUserScan,
            onclick: () => navigate('/screenings/overdue')
        },
    ]
  return (
    <div className='flex flex-wrap gap-[26px]'>
      <div className="mt-7 grid w-full grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:">
          {metricsData.slice(0,2).map((metric)=>(
            <MetricsCard key={metric.title} {...metric}/>
          ))}
      </div>

      <div className="mt-[9px] grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {metricsData.slice(2).map((metric)=>(
          <MetricsCard key={metric.title} {...metric}/>
        ))}
      </div>
    </div>
  )
}

export default DisplayInfo;
