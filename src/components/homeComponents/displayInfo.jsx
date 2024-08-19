import { IconCircleDashedCheck, IconHourglassHigh, IconUserScan } from '@tabler/icons-react'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


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
            onclick: () => navigate('/screenings/pendings')
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
    <div>
      
    </div>
  )
}

export default DisplayInfo
