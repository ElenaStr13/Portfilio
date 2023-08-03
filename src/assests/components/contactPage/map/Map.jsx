import './map.scss';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useTranslation } from 'react-i18next';
import { useMemo } from "react";


function Map() {
   
    const [t] = useTranslation(["translation"]);
     const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBvH1Pr0Vead--qveDHYfxFkQkKXEurXkM",
  });
  const center = useMemo(() => ({ lat: 25.10579, lng: 55.15076 }), []);

    return (<>
        <div className='titleText'>{t('titleContact')}</div>
 <div className="maps">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={12}
        />
      )}
    </div>  
    </> )
}



export default Map;