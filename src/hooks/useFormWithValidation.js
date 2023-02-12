import { useState, useCallback } from 'react';

export const useFormWithValidation = inputValues => {
	const [values, setValues] = useState(inputValues);
	const [errors, setErrors] = useState({});
	const [isValid, setIsValid] = useState(false);

	const handleChange = event => {
		const { value, name } = event.target;
		setValues({ ...values, [name]: value });

		switch (name) {
			case 'name':
				if (!value) {
					setErrors({ ...errors, [name]: 'Это поле не может быть пустым' });
				} else if (!value.match(/^[a-zA-Zа-яА-Яs-\s]+$/)) {
					setErrors({ ...errors, [name]: 'Недопустимое имя пользователя' });
				} else {
					setErrors({ ...errors, [name]: '' });
				}
				break;
			case 'email':
				if (!value) {
					setErrors({ ...errors, [name]: 'Это поле не может быть пустым' });
				} else if (!value.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
					setErrors({ ...errors, [name]: 'Некорректный адрес электронной почты' });
				} else {
					setErrors({ ...errors, [name]: '' });
				}
				break;
			case 'password':
				if (!value) {
					setErrors({ ...errors, [name]: 'Это поле не может быть пустым' });
				} else if (!value.match(/[A-Za-z0-9]{6,}/)) {
					setErrors({ ...errors, [name]: 'Пароль не может быть короче 6 символов' });
				} else {
					setErrors({ ...errors, [name]: '' });
				}
				break;
			default:
				setErrors({ ...errors, [name]: '' });
		}

		setIsValid(event.target.closest('form').checkValidity());
	};

	const resetForm = useCallback(
		(newValues = {}, newErrors = {}, newIsValid = false) => {
			setValues(newValues);
			setErrors(newErrors);
			setIsValid(newIsValid);
		},
		[setValues, setErrors, setIsValid]
	);

	return { values, handleChange, errors, setErrors, isValid, resetForm };
};
