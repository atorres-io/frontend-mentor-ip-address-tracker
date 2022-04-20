export const call = async (url, { method, type, body }) => {
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

export const API_KEY = 'at_XutrWCJhSHpANbD3ArkbSyvuGU0kI'; //... Set your api key so that the app works
