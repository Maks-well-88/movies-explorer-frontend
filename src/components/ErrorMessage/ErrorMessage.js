import './ErrorMessage.css';

export const ErrorMessage = ({ position, message }) => {
	let errorStyle;

	switch (position) {
		case 'search':
			errorStyle = 'ErrorMessage ErrorMessage_position_search';
			break;
		case 'inputError':
			errorStyle = 'ErrorMessage ErrorMessage_position_input-error';
			break;
		case 'submitError':
			errorStyle = 'ErrorMessage ErrorMessage_position_submit-error';
			break;
		default:
			errorStyle = 'ErrorMessage';
	}

	return <p className={errorStyle}>{message}</p>;
};
