//* Services
import { call, CORS, API_KEY } from './HttpService';

export const getGeoDatas = async () => {
	const ip = await call('https://api.ipify.org', {
		method: 'GET',
		type: 'text',
	});

	const geo = await call(
		`${CORS}https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`,
		{ method: 'GET', type: 'json' }
	);

	return Promise.resolve({ lat: geo.location.lat, lng: geo.location.lng });
};
