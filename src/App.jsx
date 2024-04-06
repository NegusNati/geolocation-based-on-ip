import { useState } from "react";

import "./App.css";
import { useGeolocation } from "./useGeolocation";

function App() {
  const [countClicks, setCountClicks] = useState(0);


  const [lat , long , isLoading , error , getPosition]  = useGeolocation();

  function handelClick(){

    setCountClicks(countClicks + 1);
    getPosition();

  }

  // function handelClick() {
  //   setCountClicks(countClicks + 1);

  //   if (navigator.geolocation) {
  //     setIsLoading(true);
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setPosition({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //     }, (error) => {
  //       setError(error.message) 
  //     });
  //   }else {
  //     setError("Geolocation is not supported by this browser.")
  //     alert("Geolocation is not supported by this browser.")
  //   }
  //   setIsLoading(false);

  // }

  return (
    <div>
      <button onClick={handelClick} disabled={isLoading} >Get my position </button>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {lat && (
        <p>
          Your GPS position is: 
         <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/@${lat},${long},15z`}> Lat: {lat} Long: {long}</a>
        </p>
      )}
      <p>You requested position {countClicks} times</p>
    </div>
  );
}

export default App;
