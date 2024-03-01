
import { useState } from "react";
import style from "./Bullets.module.scss"


const Bullets = () => {

	const [ammoList, setAmmoList] = useState([]);

	const addAmmoBlock = (e) => {
		e.preventDefault()
		setAmmoList([...ammoList, { article: '', quantity: '' }]);
	};
	return (
		<>

			<h2>Набої </h2>
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

			<button onClick={(e) => addAmmoBlock(e)}>
				додати набої
			</button>
		</>
	)
};

export { Bullets }