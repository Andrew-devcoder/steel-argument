
import { useState } from "react";
import style from "./PistolList.module.scss"

const pistolListOption = [
	{ pistol: 'пістолети...' },
	{ pistol: 'glock 17/19/19x' },
	{ pistol: 'glock 45' },
	{ pistol: 'glock 43x' }
]

const PistolList = () => {
	const [pistolList, setPistolList] = useState([{ pistol: '' }]);

	const handlePistol = (e, index) => {
		const selectedPistol = e.target.value;
		const updatedList = [...pistolList];
		updatedList[index] = { pistol: selectedPistol };
		setPistolList(updatedList);
	}

	const addPistolList = (e) => {
		e.preventDefault()
		setPistolList([...pistolList, { pistol: '' }])
	}

	return (
		<>
			<h2>Зброя</h2>

			<div>
				{pistolList.map((item, index) => (
					<div key={index}>
						<select
							name={`pistol-${index}`}
							id={`pistol-${index}`}
							value={item.pistol}
							onChange={(e) => handlePistol(e, index)}
						>
							{pistolListOption.map((option, optionIndex) => (
								<option key={optionIndex} value={option.pistol}>
									{option.pistol}
								</option>
							))}
						</select>
					</div>
				))}
			</div>

			<button
				onClick={(e) => addPistolList(e)}
			>
				додати пістолет
			</button>
		</>
	)
};

export { PistolList }