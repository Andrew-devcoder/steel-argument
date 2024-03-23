import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

import style from "./PistolList.module.scss"

// const pistolListOption = [
// 	{ pistol: 'пістолети...' },
// 	{
// 		pistol: 'Smith & Wesson / CZ P-07',
// 		cal: '22lr',
// 		price: '300 грн'
// 	},
// 	{
// 		pistol: 'Glock RBF Custom',
// 		cal: '22lr',
// 		price: '400 грн'
// 	},
// 	{
// 		pistol: 'Sig Sauer X-5',
// 		cal: '9x19',
// 		price: '950 грн'
// 	},
// 	{
// 		pistol: 'Alien',
// 		cal: '9x19',
// 		price: '1 000 грн'
// 	},
// 	{
// 		pistol: 'Sig Sauer P320',
// 		cal: '9x19',
// 		price: '400 грн'
// 	},
// 	{
// 		pistol: 'CZ 75 Shadow 2',
// 		cal: '9x19',
// 		price: '600 грн'
// 	},
// 	{
// 		pistol: 'Beretta M9',
// 		cal: '9x19',
// 		price: '500 грн'
// 	},
// 	{
// 		pistol: 'glock 17/19/19x',
// 		cal: '9x19',
// 		price: '300 грн'
// 	},
// 	{
// 		pistol: 'glock 45/43x',
// 		cal: '9x19',
// 		price: '400 грн'
// 	},
// 	{
// 		pistol: 'Kimber',
// 		cal: '.45ACP',
// 		price: '900 грн'
// 	},
// 	{
// 		pistol: 'Arsenal FireArms',
// 		cal: '.45ACP',
// 		price: '1 500 грн'
// 	},
// ]

const { container, wrapper, label } = style

const PistolList = ({ pistolListLocal }) => {
	const [pistolList, setPistolList] = useState([{ pistol: '', cal: '', price: '' }]);

	// const handlePistol = (e, index) => {
	// 	const selectedPistol = e.target.value;
	// 	const updatedList = [...pistolList];
	// 	updatedList[index] = { ...updatedList[index], pistol: selectedPistol };
	// 	setPistolList(updatedList);
	// }


	const handlePistol = (e, index) => {
		const selectedPistol = e.target.value;
		const selectedOption = pistolListLocal.find(option => option.pistol === selectedPistol);
		const updatedList = [...pistolList];
		updatedList[index] = { ...updatedList[index], pistol: selectedPistol, cal: selectedOption.cal, price: selectedOption.price };
		setPistolList(updatedList);
	}

	const addPistolList = (e) => {
		e.preventDefault()
		setPistolList([...pistolList, { pistol: '', cal: '', price: '' }])
	}

	const removePistol = (index) => {
		const updatedList = pistolList.filter((_, idx) => idx !== index);
		setPistolList(updatedList);
	}

	return (
		<div className={container}>
			<h2 className={label}>Пістолети</h2>

			<div>
				{pistolList.map((item, index) => (
					<div key={index} className={wrapper}>
						<select
							name={`pistol-${index}`}
							id={`pistol-${index}`}
							value={item.pistol}
							onChange={(e) => handlePistol(e, index)}
						>
							{pistolListLocal.map((option, optionIndex) => (
								<option key={optionIndex} value={option.pistol} data-cal={option.cal} data-price={option.price}>
									{option.pistol}
								</option>
							))}
						</select>
						<div>{item.cal}</div>
						<div>{item.price}</div>

						<RxCrossCircled onClick={() => removePistol(index)} />
					</div>
				))}
			</div>

			<button
				onClick={(e) => addPistolList(e)}
			>
				додати пістолет
			</button>
		</div>
	)
};

export { PistolList }