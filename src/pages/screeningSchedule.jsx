import React from 'react'
import { useLocation } from 'react-router-dom';
import KanbanBoard from '../components/ui/KanbanBoard';


const ScreeningSchedule = () => {
  const state = useLocation();
  return (
    <div className='w-full overflow-scroll'>
      <KanbanBoard state={state}/>
    </div>
  )
}

export default ScreeningSchedule;
