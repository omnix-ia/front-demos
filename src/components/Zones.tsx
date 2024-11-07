import { useEffect } from "react"
import { Map, useMap } from "@vis.gl/react-google-maps"
import ZonesMapControl from "./ZonesMapControl"
import { useDrawingManager } from "../hooks/useDrawingManager"

const Zones = () => {
  const map = useMap()
  const drawingManager = useDrawingManager()

  useEffect(() => {
    console.log("Logger::starting_map")
    if (!map) return
    console.log("Logger::succesfull_map")
    console.log(map)

    // here you can interact with the imperative maps API
  }, [map])

  const template = (
    <>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: -33.447487, lng: -70.673676 }}
        defaultZoom={11}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        colorScheme={"LIGHT"}
      >
        <ZonesMapControl />
      </Map>
    </>
  )

  return template
}

export default Zones
