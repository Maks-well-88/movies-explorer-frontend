import './FilterCheckbox.css';

export const FilterCheckbox = ({ checked, onCheck }) => {
	const switcherStyle = checked
		? 'FilterCheckbox__switcher FilterCheckbox__switcher_checked'
		: 'FilterCheckbox__switcher';

	const switcherFlagStyle = checked
		? 'FilterCheckbox__switcher-flag FilterCheckbox__switcher-flag_checked'
		: 'FilterCheckbox__switcher-flag';

	return (
		<div className='FilterCheckbox'>
			<div className='FilterCheckbox__container'>
				<div className={switcherStyle}>
					<div className={switcherFlagStyle} />
				</div>
				<input
					id='filter-switcher'
					className='FilterCheckbox__input'
					type='checkbox'
					checked={checked}
					onChange={onCheck}
				/>
			</div>
			<label className='FilterCheckbox__name' for='filter-switcher'>
				Короткометражки
			</label>
		</div>
	);
};
