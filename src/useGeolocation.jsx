import {  useState } from "react";

export function useGeolocation(){

    const [position, setPosition] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {error , setError} = useState(null);


    function handelClick() {    
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


      
      return [position.latitude , position.longitude , isLoading , error , handelClick];
}