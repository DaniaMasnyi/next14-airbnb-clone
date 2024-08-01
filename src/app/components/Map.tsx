'use client';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

// SVG код іконки
const svgIconHtml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path d="M12 2c-4.4 0-8 3.6-8 8 0 4.9 7.6 13.7 7.9 14l.1.1.1-.1c.3-.3 7.9-9.1 7.9-14 0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
  </svg>`;

// Створюємо кастомний DivIcon з SVG іконкою
const svgIcon = new L.DivIcon({
	html: svgIconHtml,
	className: 'custom-svg-icon', // кастомний клас для стилізації
	iconSize: [32, 32], // розмір іконки
	iconAnchor: [16, 32], // точка прив'язки (центр низу іконки)
});

interface MapProps {
	center?: number[];
}

const Map: React.FC<MapProps> = ({ center }) => {
	return (
		<MapContainer
			center={(center as L.LatLngExpression) || [51, -0.09]}
			zoom={center ? 4 : 2}
			scrollWheelZoom={false}
			className='h-[35vh] rounded-lg'
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{center && (
				<Marker position={center as L.LatLngExpression} icon={svgIcon} />
			)}
		</MapContainer>
	);
};

export default Map;
