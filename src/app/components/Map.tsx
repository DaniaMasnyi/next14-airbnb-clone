'use client';

import L from 'leaflet';
import { MapContainer } from 'react-leaflet';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import marketShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
	iconUrl: markerIcon.src,
	iconRetinaUrl: markerIcon.src,
	shadowUrl: marketShadow.src,
});

interface MapProps {
	center?: number[];
}

const Map: React.FC<MapProps> = ({ center }) => {
	return;
	<MapContainer
		center={(center as L.LatLngExpression) || [51, -0.09]}
		zoom={center ? 4 : 2}
		scrollWheelZoom={false}
		className='h-[35vh] rounded-lg'
	></MapContainer>;
};

export default Map;
