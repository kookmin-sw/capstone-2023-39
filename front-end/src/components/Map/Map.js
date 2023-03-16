import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
// npm install --save react-map-gl mapbox-gl
import { MapContainer, ModalContent, ModalOverlay } from "./style";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hhbmppbiIsImEiOiJjbGV0cXFhb2UxaW5wM3lwNGZ0NWEwNnQzIn0.07IpRbMqUnGLvvcM1vMHmQ";

function Map() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const data = [
    [-151.5129, 63.1016],
    [-150.4048, 63.1224],
    [-151.3597, 63.0781],
    [-118.497, 34.299667],
    [-87.6901, 12.0623],
    [-178.4576, -20.2873],
    [-94.8319, 16.7195],
    [-68.2679, -38.2792],
    [-140.6661, 60.0063],
  ];

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map", // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      projection: "globe", // Display the map as a globe, since satellite-v9 defaults to Mercator
      zoom: 3, // starting zoom
      center: [108, 4], // starting center in [lng, lat]
    });

    map.on("style.load", () => {
      map.setFog({
        "high-color": "#EEF1FA", //제일 바깥쪽 색
        color: "#EEF1FA", //안쪽 색
        range: [0.8, 8], //-20~20
        "star-intensity": 0, //별들의 밀집도
        "space-color": "#EEF1FA",
      }); // Set the default atmosphere style
    });

    data.map((coordinates, idx) => {
      console.log(coordinates);
      const marker = new mapboxgl.Marker({
        color: "#5756b3",
        draggable: false,
      })
        .setLngLat(coordinates)
        .addTo(map);

      marker.getElement().addEventListener("click", () => {
        setShowModal(true);
        setSelectedMarker({ lng: coordinates[0], lat: coordinates[1] });
      });
    });
  }, []);
  const closeModal = () => {
    setShowModal(false);
    setSelectedMarker(null);
  };
  return (
    <div>
      <MapContainer id="map" />
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <div>longtitude :{selectedMarker.lng}</div>
            <div>latitude :{selectedMarker.lat}</div>
          </ModalContent>
          <button onClick={closeModal}>X</button>
        </ModalOverlay>
      )}
    </div>
  );
}
export default Map;
