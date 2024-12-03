import React from 'react'

function WeatherForecast({locationData, currentData}) {

  const time = currentData.last_updated_epoch
  const time2 = new Date(time * 1000)
  const time3 = time2.toLocaleString().slice(9)

  return (
  //   <div className='w-1/3 bg-transparent text-black h-2/3  flex justify-center items-center flex-col p-5 gap-3 border-2 border-black rounded-lg'>
  //   <div className='text-3xl '>{locationData.name},{locationData.region}</div>
  //   <div className='flex justify-center items-center gap-5'>
  //    <img className='h-28 w-28' src={currentData.condition.icon} alt="image" />
  //    <div className='text-9xl '>{Math.round(currentData.temp_c)}°C</div>
  //   </div>
  //   <div className='flex justify-center items-center flex-col gap-3'>
  //    <div className='text-3xl'>{currentData.condition.text}</div>
  //    <div className=' text-lg '>updated as of {time3}</div>
  //   </div>
  //   <div className='flex justify-center items-center gap-4'>
  //    <div>feels like {currentData.feelslike_c}°C</div>
  //    <div>wind {currentData.wind_kph}km/h</div>
  //    <div>visiblity {currentData.vis_km}km</div>
  //    <div>barometer {currentData.pressure_mb} mb</div>
  //   </div>
  // </div>

  <div className='w-full bg-transparent text-black dark:text-white h-2/3 flex justify-center items-center flex-col p-5 gap-3'>
  <div className='text-3xl'>{locationData.name}, {locationData.region}</div>
  <div className='flex justify-center items-center gap-5'>
    <img className='h-28 w-28' src={currentData.condition.icon} alt="Weather icon" />
    <div className='text-9xl'>{Math.round(currentData.temp_c)}°C</div>
  </div>
  <div className='flex justify-center items-center flex-col gap-3'>
    <div className='text-3xl'>{currentData.condition.text}</div>
    <div className='text-lg'>updated as of {time3}</div>
  </div>
  <div className='flex justify-center items-center gap-4'>
    <div>feels like {currentData.feelslike_c}°C</div>
    <div>wind {currentData.wind_kph} km/h</div>
    <div>visibility {currentData.vis_km} km</div>
    <div>barometer {currentData.pressure_mb} mb</div>
  </div>
</div>
  )
}

export default WeatherForecast
