import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';

export const ProtectedRoute = ({ component: Component, ...props }) => {
	const { isLoggedIn } = useContext(AppContext);

	return <>{isLoggedIn ? <Component {...props} /> : <Navigate to='/' />}</>;
};
