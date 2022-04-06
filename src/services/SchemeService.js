export const DARK_MAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const LIGHT_MAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const preferDarkScheme =
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches;
