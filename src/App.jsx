import { useState, useEffect } from "react";



const App = () => {

  return (
    <h1>Hello world!</h1>
  );
}

export default App



// const App = () => {
//   // useEffect(() => {
//   //   const getData = async () => {
//   //     let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=Philadelphia`)
//   //     let JSONdata = await response.json()

//   //     console.log(JSONdata)

//   //     setLocation(JSONdata.location.name)
//   //     setTemperature(JSONdata.current.temp_f)
//   //     setConditions(JSONdata.current.condition.text)
//   //   }
//   //   getData()
//   // }, []);
//   const [city, setCity] = useState('');
//   const [location, setLocation] = useState('');
//   const [temperature, setTemperature] = useState('');
//   const [conditions, setConditions] = useState('');




//   const handleChange = (event) => {
//     setCity(event.target.value);
//   };

//   const YOUR_API_KEY = '93926e8f19954ff8892185839241302'

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     let response = await fetch(
//       `http://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}`
//     );
//     let JSONdata = await response.json();
//     console.log(JSONdata)
//     setLocation(JSONdata.location.name)
//     setTemperature(JSONdata.current.temp_f)
//     setConditions(JSONdata.current.condition.text)
//   };



//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         Please enter your city name for the weather:
//         <input type="text" onChange={handleChange} />
//         <input type="submit"
//           value="Get my forecast!" />
//       </form>
//       <h1>Here's Your Weather Report:</h1>
//       <p>Location: {location}</p>
//       <p>Temperature: {temperature}</p>
//       <p>Conditions: {conditions}</p>
//     </>
//   );
// }

// export default App