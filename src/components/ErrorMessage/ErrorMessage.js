import './ErrorMessage.css';

export const ErrorMessage = ({ position, message }) => {
	let errorStyle;

	switch (position) {
		case 'profile':
			errorStyle = 'ErrorMessage ErrorMessage_position_profile';
			break;
		default:
			errorStyle = '';
	}

	return <p className={errorStyle}>{message}</p>;
};
