export const DARK_MAP =
	'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';

export const LIGHT_MAP =
	'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';

export const preferDarkScheme =
	window.matchMedia &&
	window.matchMedia('(prefers-color-scheme: dark)').matches;
