import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthorized, path, component }) => {
	return (
		<>
			{ isAuthorized ? <Route key={ path } path={ path } element={ component }/> :
				<Route key={ path } path={ '/' }/> }
		</>
	);
};

export default PrivateRoute;
