import { APIProvider, useMap } from "@vis.gl/react-google-maps"
import Zones from "./Zones"

const Maps = () => {
  const api_key = process.env.REACT_GOOGLE_MAPS_API_KEY || "AIzaSyDkNnd7SjFy810OmX5qE7O3vw66C2eIqH0"

  const template = (
    <APIProvider apiKey={api_key} region={"57"} language={"es"}>
      <Zones />
    </APIProvider>
  )

  return template
}

export default Maps
