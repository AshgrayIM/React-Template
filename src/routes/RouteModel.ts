export interface RouteModel {
	name: string;
	path: string;
	component: React.FC<any>;
	props?: any;
	requireAuth?: boolean;
}
