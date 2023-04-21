import React, { useRef, useEffect } from 'react';
import L from 'leaflet';

const Map = ({ address }) => {
  const mapRef = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!map.current) {
      map.current = L.map(mapRef.current).setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map.current);
    }

    L.marker([51.5, -0.09]).addTo(map.current)
      .bindPopup(address)
      .openPopup();
  }, [address]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default Map;