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

  return (
    <div>
      <button onClick={handelClick} disabled={isLoading} >Get my position </button>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {lat && (
        <p>
          Your GPS position is: 
         <a target="_blank" rel="noreferrer" href={`https://www.google.com/maps/@${lat},${long},18z`}> Lat: {lat} Long: {long}</a>
        </p>
      )}
      <p>You requested position {countClicks} times</p>
    </div>
  );
}

export default App;
