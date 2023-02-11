import './Form.css';

export const Form = ({ children, button, registerError }) => {
	return (
		<form className='Form'>
			{children}
			<p className='Form__error-info'>{registerError}</p>
			<button className='Form__button' type='submit'>
				{button}
			</button>
		</form>
	);
};
