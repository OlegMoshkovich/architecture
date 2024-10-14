"use client"; // Ensures client-side rendering
import { useRef, useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import { projects } from "./projects";
import { useTheme } from "@mui/material/styles";
import 'mapbox-gl/dist/mapbox-gl.css';

// Set your Mapbox token
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function Map({ zoom = 4 }) {
  const mapRef = useRef();
  const theme = useTheme();
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const markerStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
  };

  return (
    <MapGL
      ref={mapRef}
      initialViewState={{
        latitude: 47.3220, // Latitude for Dijon
        longitude: 5.0415, // Longitude for Dijon
        zoom: zoom,
      }}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/aechack2024/cltfvi20g00r401qn6l1shoag"
      style={{ width: "100%", height: "100vh" }}
      onRender={() => mapRef.current?.resize()} // Fix to handle viewport resizing correctly
      projection="mercator" // Set the map projection to flat
    >
      {projects.map((project, index) => (
        <Marker
          key={index}
          latitude={project.lat}
          longitude={project.lng}
          anchor="center" // Ensures the marker is correctly centered on coordinates
        >
          <div
            onMouseEnter={() => setHoveredMarker(index)}
            onMouseLeave={() => setHoveredMarker(null)}
            onClick={() => setActiveMarker(index === activeMarker ? null : index)}
            style={{
              ...markerStyle,
              backgroundColor:
                activeMarker === index
                  ? theme.palette.secondary.main
                  : theme.palette.primary.main,
            }}
          />
          {hoveredMarker === index && (
            <Popup
              latitude={project.lat}
              longitude={project.lng}
              closeButton={false}
              closeOnClick={false}
              offsetTop={-30}
              anchor="top" // Ensures the popup aligns correctly
            >
              <div style={{ color: theme.palette.text.primary }}>
                <h3>{project.name}</h3>
                <p>{project.projectInfo[0].description}</p>
              </div>
            </Popup>
          )}
        </Marker>
      ))}
    </MapGL>
  );
}
