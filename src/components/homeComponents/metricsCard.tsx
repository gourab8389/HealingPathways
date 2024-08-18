import React from 'react'

const MetricsCard = ({title, subtitle, value, icon, icon: Icon, onClick}) => {
  return (
    <div className='flex flex-col rounded-xl border bg-white shadow-sm dark:border-neutral-800 dark:bg-[#13131a]'>
      <div className="flex justify-between gap-x-3 p-4 md:p-5">
        <div className="">
            <p className='text-xs uppercase tracking-wide text-neutral-500'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default MetricsCard
