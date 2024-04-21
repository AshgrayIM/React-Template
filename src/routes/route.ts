import React from 'react';
import {RouteModel} from 'routes/RouteModel';
import {MainPage} from "../pages/main/page";

export const RouteContext = React.createContext({});

export const pages: RouteModel[] = [
	{
		name: 'MainPage',
		requireAuth: false,
		component: MainPage,
		path: '/main',
	},
];
