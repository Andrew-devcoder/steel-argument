
import { useState } from "react";
import style from "./Bullets.module.scss"

const { container, label, button } = style

const Bullets = () => {

	const [ammoList, setAmmoList] = useState([]);

	const addAmmoBlock = (e) => {
		e.preventDefault()
		setAmmoList([...ammoList, { article: '', quantity: '' }]);
	};
	return (
		<div className={container}>

			<h2 className={label}>Набої </h2>
			<div>
				<input type="number" placeholder="артикул" />
				<input type="number" placeholder="кількість" />
			</div>
			{ammoList.map((ammo, index) => (
				<div key={index}>
					<input
						type="number"
						placeholder="артикул"
						value={ammo.article}
						onChange={(e) => {
							const updatedAmmoList = [...ammoList];
							updatedAmmoList[index].article = e.target.value;
							setAmmoList(updatedAmmoList);
						}}
					/>
					<input
						type="number"
						placeholder="кількість"
						value={ammo.quantity}
						onChange={(e) => {
							const updatedAmmoList = [...ammoList];
							updatedAmmoList[index].quantity = e.target.value;
							setAmmoList(updatedAmmoList);
						}}
					/>
				</div>
			))}

			<button
				className={button}
				onClick={(e) => addAmmoBlock(e)}
			>
				додати набої
			</button>
		</div>
	)
};

export { Bullets }