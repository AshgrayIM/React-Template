import React, {FC, useContext, useEffect} from 'react';
import {Routes, Route, Navigate, useLocation} from 'react-router-dom';
import {pages, RouteContext} from 'routes/route';
import {BarLoader} from 'react-spinners';

export const RouteContainer: FC = () => {
	const props = useContext(RouteContext);

	return (
		<Routes>
			<Route path="/" element={<Navigate to="/main" replace/>}/>
			{pages.map((route) =>
				<Route
					key={route.name}
					path={route.path}
					element={
						<React.Suspense fallback={<BarLoader color={'#7700FF'}/>}>
							<ScrollToTop/>
							{React.createElement(route.component, {...props,})}
						</React.Suspense>
					}
				/>
			)}
		</Routes>
	);
};

export default function ScrollToTop() {
	const {pathname} = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
