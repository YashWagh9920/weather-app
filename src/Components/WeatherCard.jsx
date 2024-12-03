import React from 'react'

function WeatherCard({futureData}) {

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const time = new Date(futureData.date_epoch * 1000)
  const time2 = daysOfWeek[time.getUTCDay()]
  const time3 = time.getUTCDate()
  const time4 = `${time2} ${time3}`

  return (
    // <div className='flex justify-center items-start flex-col text-black bg-transparent border-black border-4 border-solid  w-40 h-56 m-5 p-2 rounded-xl gap-2'>
    //  <div className='text-3xl font-semibold'>{time4}</div>
    //  <div><img src={futureData.day.condition.icon} alt="" /></div>
    //  <div className='flex justify-center  items-end gap-4'>
    //   <div className='font-semibold text-2xl'>{Math.round(futureData.day.maxtemp_c)}°</div>
    //   <div className='font-semibold'>{Math.round(futureData.day.mintemp_c)}°</div>
    //  </div>
    //  <div className='font-semibold text-xl'>{futureData.day.condition.text}</div>
    // </div> 


    <div className='flex justify-center items-start flex-col text-black dark:text-white bg-transparent border-black dark:border-white border-4 border-solid w-40 h-56 m-5 p-2 rounded-xl gap-2'>
    <div className='text-3xl font-semibold'>{time4}</div>
    <div><img src={futureData.day.condition.icon} alt="Weather icon" /></div>
    <div className='flex justify-center items-end gap-4'>
      <div className='font-semibold text-2xl'>{Math.round(futureData.day.maxtemp_c)}°</div>
      <div className='font-semibold'>{Math.round(futureData.day.mintemp_c)}°</div>
    </div>
    <div className='font-semibold text-xl'>{futureData.day.condition.text}</div>
  </div>
  )
}

export default WeatherCard
