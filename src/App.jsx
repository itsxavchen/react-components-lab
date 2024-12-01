// src/App.jsx

import WeatherForecast from "./Components/WeatherForecast/WeatherForecast";

const App = () => {
    const weatherForecasts = [
      {
        day: 'Mon',
        img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
        imgAlt: 'sun icon',
        conditions: 'sunny',
        time: 'Morning',
      },
      {
        day: 'Tue',
        img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
        imgAlt: 'moon icon',
        conditions: 'clear',
        time: 'Night',
      },
      {
        day: 'Wed',
        img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
        imgAlt: 'clouds with lightning icon',
        conditions: 'stormy',
        time: 'All Day',
      },
      {
        day: 'Thu',
        img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
        imgAlt: 'sun overcast by clouds icon',
        conditions: 'overcast',
        time: 'Evening',
      },
      {
        day: 'Fri',
        img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
        imgAlt: 'moon overcast by clouds icon',
        conditions: 'cloudy',
        time: 'Night',
      },
    ];
  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map((dailyForecast, index) => {
          return <WeatherForecast
              key={index}
              day={dailyForecast.day}
              img={dailyForecast.img}
              imgAlt={dailyForecast.imgAlt}
              conditions={dailyForecast.conditions}
              time={dailyForecast.time}
              // {...dailyForecast}
           />
        })};
      </section>
    </>
  );
}

export default App

