import {
    ControlPosition,
    MapControl
  } from '@vis.gl/react-google-maps';

const ZonesMapControl = () => {
    const template = <>
        <MapControl position={ControlPosition.TOP_CENTER}>
        .. any component here will be added to the control-containers of the
        google map instance ..
      </MapControl>
    </>

    return template
}

export default ZonesMapControl