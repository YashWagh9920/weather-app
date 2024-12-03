import { useEffect, useState } from 'react'
import WeatherForecast from './Components/WeatherForecast'
import WeatherCard from './Components/WeatherCard'
import ThemeBtn from './Components/ThemeBtn'
import { useSelector } from 'react-redux'
import lightimage from "./assets/images/lightmode.jpeg";
import darkimage from "./assets/images/darkmode.jpeg";

function App() {

  const [input, setInput] = useState("")
  const [locationData, setLocationData] = useState(null)
  const [currentData, setCurrentData] = useState(null)
  const [futureData, setFutureData] = useState(null)
  const [error, setError] = useState(null)
  const themeMode = useSelector((state)=> state.theme)


  useEffect(() => {
    const bodyelement = document.querySelector(".body")
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

    const bgimage = themeMode === "light" ? lightimage : darkimage

   bodyelement.style.backgroundImage = `url(${bgimage})`
  }, [themeMode])

  const getData = (e) => {
    e.preventDefault();
    if (!input) {
      setError("Please enter a valid city, state, or country name.")
      return
    }

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${input}&days=7`)
      .then((response) => response.json())
      .then((data) => {

        if (!data.location || !data.current || !data.forecast) {
          setError(data["error"]["message"])
          setLocationData(null)
          setCurrentData(null)
          setFutureData(null)
        }

        setLocationData(data["location"])
        setCurrentData(data["current"])
        setFutureData(data["forecast"]["forecastday"])
        setError("")
      })
  }


  return (
    <>
      <div className='flex flex-col items-end gap-1 mt-4 mr-5'>
        <ThemeBtn />
        <span className="ml-3 text-sm font-medium text-black dark:text-white">Toggle Button</span>
      </div>
      <div className='bg-transparent w-full flex justify-center items-center flex-col'>
        <div className='text-black font-extrabold text-5xl text-center dark:text-white'>Search Weather Forecast</div>
        <form className='flex justify-center items-center w-full h-1/2 m-5 gap-2'
          onSubmit={getData}
        >
          <input type="text"
            placeholder='enter name of city, state or country'
            className='p-2 text-xl font-semibold rounded-lg w-1/2'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type='submit' className='bg-orange-500 p-2 text-xl font-bold rounded-lg border-black border-2'>Search</button>
        </form>
        {error && <div className='text-red-500 text-center text-5xl font-bold'>{error}</div>}
      </div>
      <div className='flex justify-center items-center'>
        {
          locationData && currentData && (
            <WeatherForecast
              locationData={locationData}
              currentData={currentData}
            />
          )
        }
      </div>

      <div className='flex justify-center items-center gap-5 mt-2 flex-wrap'>
        {futureData && (
          futureData.map((element) => (
            <WeatherCard key={element.date} futureData={element} />
          ))
        )
        }
      </div>


    </>
  )
}

export default App
