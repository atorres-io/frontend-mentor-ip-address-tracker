import React, { useEffect, useState } from 'react';
import './Main.css';

//* External Packages
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import L, { icon } from 'leaflet';
import MarkerIcon from '../../assets/images/marker-icon.png';
import ShadowIcon from '../../assets/images/marker-shadow.png';

//* Services
import {
	preferDarkScheme,
	DARK_MAP,
	LIGHT_MAP,
} from '../../services/SchemeService';
import { getGeoDatas } from '../../services/GeoService';

const iconCustom = icon({
	iconUrl: MarkerIcon,
	shadowUrl: ShadowIcon,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	tooltipAnchor: [16, -28],
	shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconCustom;

function Main() {
	const [url, setUrl] = useState('');
	const [center, setCenter] = useState({ lat: 50.5, lng: 30.5 });
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setUrl(preferDarkScheme ? DARK_MAP : LIGHT_MAP);
		const updateCenter = async () => {
			const center = await getGeoDatas();
			setCenter(center);
			setLoading(false);
		};
		updateCenter();
	}, []);

	return (
		<main>
			{loading ? (
				'loading...'
			) : (
				<MapContainer center={center} zoom={15} zoomControl={false}>
					<TileLayer url={url} />
				</MapContainer>
			)}
		</main>
	);
}

export default Main;
