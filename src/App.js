import React from 'react';

//* Pages
import Home from './pages/Home/Home';

function App() {
	React.useEffect(() => {
		fetch('https://cors-anywhere.herokuapp.com/');
	}, []);

	return <Home />;
}

export default App;
