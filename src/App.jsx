import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [position, setPosition] = useState({});
  const [countClicks, setCountClicks] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const {error , setError} = useState(null);

  function handelClick() {
    setCountClicks(countClicks + 1);

    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }, (error) => {
        setError(error.message) 
      });
    }else {
      setError("Geolocation is not supported by this browser.")
      alert("Geolocation is not supported by this browser.")
    }
    setIsLoading(false);

  }
  console.log(" pos => ", position.latitude);
    useEffect(function () {}, []);

  return (
    <div>
      <button onClick={handelClick} disabled={isLoading} >Get my position </button>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {position.longitude && (
        <p>
          Your GPS position is: 
         <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/@${position.latitude},${position.longitude},15z`}> Long {position.longitude} Lat {position.latitude}</a>
        </p>
      )}
      <p>You requested position {countClicks} times</p>
    </div>
  );
}

export default App;
