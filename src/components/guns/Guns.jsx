
import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

import style from "./Guns.module.scss"

const { container, wrapper, label } = style

const Guns = ({ gunList }) => {
	const [selectList, setSelectList] = useState([]);
	const [labelWrapper, setLabelWrapper] = useState('')

	useEffect(() => {
		addGunList()
	}, [])


	useEffect(() => {
		if (gunList && gunList.length > 0 && gunList[0].gun === 'пістолети...') {
			console.log('pistol')
			setLabelWrapper('Пістолети')
		} else {
			setLabelWrapper('Гладкоствольна та нарізна')
		}


	}, [gunList])

	const handleGun = (e, index) => {
		const selectedGun = e.target.value;
		const selectedOption = gunList.find(option => option.gun === selectedGun);
		const updatedList = [...selectList];
		updatedList[index] = { gun: selectedGun, cal: selectedOption.cal, price: selectedOption.price };
		setSelectList(updatedList);
	}

	const addGunList = () => {
		const newGunIndex = selectList.length;
		const defaultGun = { gun: '', cal: '', price: '' };
		setSelectList([...selectList, defaultGun]);
	}

	const removeGun = (index) => {
		const updatedList = selectList.filter((_, idx) => idx !== index);
		setSelectList(updatedList);
	}

	return (
		<div className={container}>
			<h2 className={label}>{labelWrapper}</h2>

			<div>
				{selectList.map((item, index) => (
					<div key={index} className={wrapper}>
						<select
							name={`pistol-${index}`}
							id={`pistol-${index}`}
							value={item.gun}
							onChange={(e) => handleGun(e, index)}
						>
							{/* <option value="">виберіть пістолет</option> */}
							{gunList.map((option, optionIndex) => (
								<option key={optionIndex} value={option.gun} data-cal={option.cal} data-price={option.price}>
									{option.gun}
								</option>
							))}
						</select>
						<div>{item.cal}</div>
						<div>{item.price}</div>

						<RxCrossCircled onClick={() => removeGun(index)} />
					</div>
				))}
			</div>

			<button onClick={addGunList}>додати</button>
		</div>
	)
};

export { Guns }
