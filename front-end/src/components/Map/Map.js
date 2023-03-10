import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
// npm install --save react-map-gl mapbox-gl

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hhbmppbiIsImEiOiJjbGV0cXFhb2UxaW5wM3lwNGZ0NWEwNnQzIn0.07IpRbMqUnGLvvcM1vMHmQ";

function Mapbox() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      projection: "globe", // Display the map as a globe, since satellite-v9 defaults to Mercator
      zoom: 2, // starting zoom
      center: [108, 4], // starting center in [lng, lat]
    });

    map.on("style.load", () => {
      map.setFog({}); // Set the default atmosphere style
    });

    map.on("load", () => {
      map.addSource("earthquakes", {
        type: "geojson",
        // Use a URL for the value for the `data` property.
        data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
      });

      map.addLayer({
        id: "earthquakes-layer",
        type: "circle",
        source: "earthquakes",
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 2,
          "circle-color": "red",
          "circle-stroke-color": "white",
        },
      });
    });
  }, []);

  return (
    <div
      id="map"
      style={{ position: "absolute", top: 0, bottom: 0, width: "100%" }}
    />
  );
}

export default Mapbox;
