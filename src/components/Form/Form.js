import './Form.css';

export const Form = ({ children, button }) => {
	return (
		<form className='Form'>
			{children}
			<p className='Form__error-info'>Что-то пошло не так...</p>
			<button className='Form__button' type='submit'>
				{button}
			</button>
		</form>
	);
};
