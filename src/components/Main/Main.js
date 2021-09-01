import React, { useEffect, useState } from 'react';
import './Main.css';

//* External Packages
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

//* Utils
import {
	preferDarkScheme,
	DARK_MAP,
	LIGHT_MAP,
} from '../../utils/SchemeService';

function Main(props) {
	const data = props.data;
	const [url, setUrl] = useState('');

	useEffect(() => {
		setUrl(preferDarkScheme ? DARK_MAP : LIGHT_MAP);
		console.log(data);
	}, [data]);

	return (
		<main>
			<MapContainer
				center={[36.719865, -4.462333]}
				zoom={15}
				zoomControl={false}
			>
				<TileLayer url={url} />
			</MapContainer>
		</main>
	);
}

export default Main;
