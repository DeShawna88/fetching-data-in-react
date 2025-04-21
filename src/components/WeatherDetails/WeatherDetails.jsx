// src/components/WeatherDetails/WeatherDetails.jsx

const WeatherDetails = (props) => {
    console.log('WeatherDetails props:', props);
    return (
      <section>
        <h2>Weather Details</h2>
        <img src={props.weather.icon} alt="" />
        <p><strong>Location:</strong> {props.weather.location}</p>
    <p><strong>Temperature:</strong> {props.weather.temperature}</p>
    <p><strong>Condition:</strong> {props.weather.condition}</p>
      </section>
    );
  };
  
  export default WeatherDetails;
  