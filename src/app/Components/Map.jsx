"use client"; // Ensures client-side rendering
import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import useStore from "../Store"; // Import the store
import { useTheme } from "@mui/material/styles";
import 'mapbox-gl/dist/mapbox-gl.css';

// Set your Mapbox token
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = forwardRef(({ zoom = 4 }, ref) => {
  const mapRef = useRef();
  const theme = useTheme();
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const projects = useStore((state) => state.projects); // Access projects from the store
  const currentProject = useStore((state) => state.currentProject); // Access currentProject from the store
  const setCurrentProject = useStore((state) => state.setCurrentProject); // Access setCurrentProject from the store

  // Function to determine marker size based on screen width
  const getMarkerStyle = () => {
    if (typeof window !== 'undefined') { // Check if window is defined
      const isMobile = window.innerWidth <= 768; // Define mobile breakpoint
      return {
        width: isMobile ? "14px" : "12px",
        height: isMobile ? "14px" : "12px",
        borderRadius: "50%",
        cursor: "pointer",
        backgroundColor: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`,
      };
    }
    // Default style if window is not defined
    return {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      cursor: "pointer",
      backgroundColor: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.main}`,
    };
  };

  const markerStyle = getMarkerStyle();

  const highlightedMarkerStyle = {
    ...markerStyle,
    backgroundColor: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.primary.main}`,
  };

  // Define the goToLocation method
  const goToLocation = (lat, lng, zoom = 4) => {
    const map = mapRef.current.getMap();
    map.flyTo({ center: [lng, lat], zoom, essential: true, duration: 5000 }); // Adjusted duration for smoother animation
  };

  // Expose goToLocation method to parent component
  useImperativeHandle(ref, () => ({
    goToLocation,
  }));

  Map.displayName = 'Map';

  // Function to determine if the device is mobile
  const isMobile = () => window.innerWidth <= 768; // You can adjust the breakpoint as needed

  const initialViewState = isMobile()
    ? { latitude: 48.0, longitude: 7.60, zoom: zoom } // Mobile view
    : { latitude: 50.0, longitude: 6.0415, zoom: zoom }; // Desktop view

  return (
    <MapGL
      ref={mapRef}
      initialViewState={initialViewState}
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
              // goToLocation(project.lat, project.lng, project.zoom); // Removed this line
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
});

export default Map;
