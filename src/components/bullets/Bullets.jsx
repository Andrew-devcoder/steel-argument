import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

import style from "./Bullets.module.scss"

const { container, label, wrapper, button } = style

const Bullets = () => {
	const [ammoList, setAmmoList] = useState([{ article: '', quantity: '' }]);

	const addAmmoBlock = () => {
		setAmmoList([...ammoList, { article: '', quantity: '' }]);
	};

	const handleInputChange = (index, field, value) => {
		const updatedAmmoList = [...ammoList];
		updatedAmmoList[index][field] = value;
		setAmmoList(updatedAmmoList);
	};

	const handleDeleteRow = (index) => {
		const updatedAmmoList = [...ammoList];
		updatedAmmoList.splice(index, 1);
		setAmmoList(updatedAmmoList);
	};

	return (
		<div className={container}>
			<h2 className={label}>Набої </h2>
			{ammoList.map((ammo, index) => (
				<div key={index} className={wrapper}>
					<input
						type="number"
						placeholder="артикул"
						value={ammo.article}
						onChange={(e) => handleInputChange(index, 'article', e.target.value)}
					/>
					<input
						type="number"
						placeholder="кількість"
						value={ammo.quantity}
						onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
					/>
					<RxCrossCircled onClick={() => handleDeleteRow(index)} />
				</div>
			))}
			<button className={button} onClick={addAmmoBlock}>
				додати набої
			</button>
		</div>
	);
};

export { Bullets };
