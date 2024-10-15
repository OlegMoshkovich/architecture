"use client"; // Ensures client-side rendering
import { useRef, useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import useStore from "../Store"; // Import the store
import { useTheme } from "@mui/material/styles";
import 'mapbox-gl/dist/mapbox-gl.css';

// Set your Mapbox token
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function Map({ zoom = 4 }) {
  const mapRef = useRef();
  const theme = useTheme();
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const projects = useStore((state) => state.projects); // Access projects from the store
  const currentProject = useStore((state) => state.currentProject); // Access currentProject from the store
  const setCurrentProject = useStore((state) => state.setCurrentProject); // Access setCurrentProject from the store

  const markerStyle = {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
  };

  const highlightedMarkerStyle = {
    ...markerStyle,
    backgroundColor: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.primary.main}`, // Use primary color for border when selected
  };

  // Add the goToLocation method
  const goToLocation = (lat, lng, zoom = 11) => {
    const map = mapRef.current.getMap();
    map.flyTo({ center: [lng, lat], zoom, essential: true, duration: 2000 }); // Adjusted duration for smoother animation
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
            onClick={() => {
              setCurrentProject(project); // Set the current project in the store
              goToLocation(project.lat, project.lng, project.zoom); // Zoom to the selected project
            }}
            style={
              currentProject?.name === project.name
                ? highlightedMarkerStyle
                : markerStyle
            }
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
                <img
                  src={project.projectInfo[0].image}
                  alt={project.name}
                  style={{ width: '100px', height: 'auto' }}
                />
              </div>
            </Popup>
          )}
        </Marker>
      ))}
    </MapGL>
  );
}
