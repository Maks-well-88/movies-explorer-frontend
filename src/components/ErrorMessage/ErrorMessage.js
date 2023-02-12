import './ErrorMessage.css';

export const ErrorMessage = ({ position, message }) => {
	let errorStyle;

	switch (position) {
		case 'profile':
			errorStyle = 'ErrorMessage ErrorMessage_position_profile';
			break;
		case 'search':
			errorStyle = 'ErrorMessage ErrorMessage_position_search';
			break;
		default:
			errorStyle = 'ErrorMessage';
	}

	return <p className={errorStyle}>{message}</p>;
};
