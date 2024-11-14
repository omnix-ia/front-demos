import React, { useState, useEffect, useCallback } from "react"
import { GoogleMap, LoadScript, DrawingManager, Polygon } from "@react-google-maps/api"

// Types for Google Maps
interface LatLng {
  lat: number
  lng: number
}

interface PolygonCoordinates {
  path: LatLng[]
}

const mapContainerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: 37.7749,
  lng: -122.4194, // Default to San Francisco
}

const MapWithDrawing: React.FC = () => {
  const [polygons, setPolygons] = useState<PolygonCoordinates[]>([])
  const [drawingManager, setDrawingManager] = useState<google.maps.drawing.DrawingManager | null>(null)

  // Callback when a polygon is drawn
  const onPolygonComplete = useCallback((polygon: google.maps.Polygon) => {
    const path = polygon.getPath().getArray()
    const coordinates: LatLng[] = path.map((coord) => ({
      lat: coord.lat(),
      lng: coord.lng(),
    }))

    console.log(coordinates)
    setPolygons((prevPolygons) => [...prevPolygons, { path: coordinates }])
  }, [])

  // Initialize drawing manager options
  useEffect(() => {
    if (drawingManager) {
      console.log("enabled")
      drawingManager.setOptions({
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        polygonOptions: {
          editable: true,
          draggable: true,
        },
      })

      google.maps.event.addListener(drawingManager, "polygoncomplete", function (polygon: google.maps.Polygon) {
        onPolygonComplete(polygon)
      })
    }
  }, [drawingManager])

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDkNnd7SjFy810OmX5qE7O3vw66C2eIqH0"
      libraries={["drawing"]} // Include drawing library
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onLoad={(map) => setDrawingManager(new google.maps.drawing.DrawingManager({ map }))}
      >
        {/* Drawing manager */}
        <DrawingManager />

        {/* Render all polygons */}
        {polygons.map((polygon, index) => (
          <Polygon
            key={index}
            paths={polygon.path}
            options={{
              fillColor: "red",
              fillOpacity: 0.35,
              strokeColor: "blue",
              strokeOpacity: 1,
              strokeWeight: 2,
            }}
          />
        ))}
      </GoogleMap>

      {/* Display Coordinates */}
      <div style={{ marginTop: "10px" }}>
        <h3>Polygons Coordinates:</h3>
        <ul>
          {polygons.map((polygon, index) => (
            <li key={index}>
              <pre>{JSON.stringify(polygon.path, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </div>
    </LoadScript>
  )
}

export default MapWithDrawing
