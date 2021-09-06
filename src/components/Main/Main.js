import React, { useEffect, useState } from 'react';
import './Main.css';

//* External Packages
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

//* Services
import {
	preferDarkScheme,
	DARK_MAP,
	LIGHT_MAP,
} from '../../services/SchemeService';
import { getGeoDatas } from '../../services/GeoService';

//* Assets
import MarkerLight from '../../assets/images/icon-location-light.svg';
import MarkerDark from '../../assets/images/icon-location-dark.svg';

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

	const iconCustom = new L.Icon({
		iconUrl: preferDarkScheme ? MarkerLight : MarkerDark,
		iconRetinaUrl: preferDarkScheme ? MarkerLight : MarkerDark,
		iconAnchor: null,
		popupAnchor: null,
		shadowUrl: null,
		shadowSize: null,
		shadowAnchor: null,
		iconSize: new L.Point(45, 45),
	});

	return (
		<main>
			{loading ? (
				<div
					className={`wrapper-loading ${preferDarkScheme ? 'dark' : 'light'}`}
				>
					<span>Loading...</span>
				</div>
			) : (
				<MapContainer center={center} zoom={15} zoomControl={false}>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url={url}
					/>
					<Marker position={center} icon={iconCustom}></Marker>
				</MapContainer>
			)}
		</main>
	);
}

export default Main;
