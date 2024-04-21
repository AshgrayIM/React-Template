import React from 'react';
import 'assets/style/default.css';
import {BrowserRouter} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import {RouteContainer} from "routes/RouteContainer";

function App() {
	return <>
		<BrowserRouter>
			<RouteContainer/>
			<Toaster position={'bottom-center'}/>
		</BrowserRouter>
	</>;
}

export default App;
