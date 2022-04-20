//* Services
import { call, API_KEY } from './HttpService';

export const getGeoDatas = async (tempIp = null) => {
	let ip;

	if (tempIp === null) {
		ip = await call('https://api.ipify.org', {
			method: 'GET',
			type: 'text',
		});
	} else {
		ip = tempIp;
	}

	const geo = await call(
		`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`,
		{ method: 'GET', type: 'json' }
	);

	return Promise.resolve({
		lat: geo.location.lat,
		lng: geo.location.lng,
		ip: geo.ip,
		isp: geo.isp,
		timezone: `UTC ${geo.location.timezone}`,
		location: `${geo.location.city}, ${geo.location.country} ${geo.location.postalCode}`,
	});
};
