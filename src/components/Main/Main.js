import React, { useEffect, useState } from 'react';
import './Main.css';

//* External Packages
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

//* Services
import {
	preferDarkScheme,
	DARK_MAP,
	LIGHT_MAP,
} from '../../services/SchemeService';
import { getGeoDatas } from '../../services/GeoService';

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
