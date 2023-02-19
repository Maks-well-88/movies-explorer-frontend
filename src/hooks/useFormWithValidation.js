import { useState } from 'react';

import { inputValidationMessages, regExps } from '../utils/constants';

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
					setErrors({ ...errors, [name]: inputValidationMessages.cantBeBlank });
				} else if (!value.match(regExps.nameRegExp)) {
					setErrors({ ...errors, [name]: inputValidationMessages.invalidUsername });
				} else {
					setErrors({ ...errors, [name]: '' });
				}
				break;
			case 'email':
				if (!value) {
					setErrors({ ...errors, [name]: inputValidationMessages.cantBeBlank });
				} else if (!value.match(regExps.emailRegExp)) {
					setErrors({ ...errors, [name]: inputValidationMessages.incorrectEmail });
				} else {
					setErrors({ ...errors, [name]: '' });
				}
				break;
			case 'password':
				if (!value) {
					setErrors({ ...errors, [name]: inputValidationMessages.cantBeBlank });
				} else if (!value.match(regExps.passRegExp)) {
					setErrors({ ...errors, [name]: inputValidationMessages.tooShortPassword });
				} else {
					setErrors({ ...errors, [name]: '' });
				}
				break;
			case 'loginPassword':
				if (!value) {
					setErrors({ ...errors, [name]: inputValidationMessages.cantBeBlank });
				} else {
					setErrors({ ...errors, [name]: '' });
				}
				break;
			default:
				setErrors({ ...errors, [name]: '' });
		}

		setIsValid(event.target.closest('form').checkValidity());
	};

	return { values, setValues, handleChange, errors, setErrors, isValid, setIsValid };
};
