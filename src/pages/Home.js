import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

function Home() {
  const [enableMap, setEnableMap] = React.useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: null, //Insert key here
  });

  if (!isLoaded) {
    return <div>Map Loaded</div>;
  }

  return (
    <>
      <h1>Home</h1>
      {enableMap && (
        <GoogleMap
          zoom={10}
          center={{ lat: -33.766098, lng: 150.912693 }}
          mapContainerClassName="mapContainer"
        />
      )}
    </>
  );
}

export default Home;
