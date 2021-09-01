const _makeRequest = async (url, { method, type, body }) => {
	const response = await fetch(url, {
		method: method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		credentials: 'same-origin',
		body: JSON.stringify(body),
	});
	return type === 'text' ? await response.text() : await response.json();
};

export const getIP = url => {
	const options = {
		method: 'GET',
		type: 'text',
	};
	return _makeRequest(url, options);
};

export const getGeo = url => {
	const options = {
		method: 'GET',
		type: 'text',
	};
	return _makeRequest(url, options);
};
