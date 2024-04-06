import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [position, setPosition] = useState({});
  const [countClicks , setCountClicks] = useState(0);


  function handelClick(){
    setCountClicks(countClicks + 1)

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      setPosition(position.coords);


    });



  }
  console.log( " pos => ",  position.latitude)
useEffect( function (){
}, [])

  return (
    <div>
     <button onClick={handelClick}  >Get my position </button>
     {/* { position !== 0 && <p>Your GPS position: {position} </p> } */}
    {position.length > 0 && <p>Your GPS position: {position.longitude} {position.latitude} </p>}
      <p>You requested position {countClicks} times</p>

    </div>
  )
}

export default App
