import React, { useCallback, useEffect, useState } from 'react';
import './Home.css';

//* Components
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

//* Utils
import { getIP, getGeo } from '../../utils/HttpService';

function Home() {
	const [geo, setGeo] = useState({});

	const getGeoDatas = useCallback(async () => {
		const ipv4 = await getIP('https://api.ipify.org');
		const geolocation = await getGeo(
			`https://geo.ipify.org/api/v1?apiKey=at_XutrWCJhSHpANbD3ArkbSyvuGU0kI&ipAddress=${ipv4}`
		);
		setGeo(geolocation);
	}, []);

	useEffect(() => {
		getGeoDatas();
	}, [getGeoDatas]);

	return (
		<>
			<Header />
			<Main data={geo} />
		</>
	);
}

export default Home;
