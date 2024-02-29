
import style from "./Form.module.scss"

import { useState } from "react";


const Form = () => {
	const handlePrint = () => {
		window.print()
	}

	const [name, setName] = useState('')

	const handleSubmit = (e) => {
		e.preventDefaukt()
		console.log(name)
	}

	const [pistol, setPistol] = useState('')

	const pistolListOption = [
		{ pistol: 'пістолети...' },
		{ pistol: 'glock 17/19/19x' },
		{ pistol: 'glock 45' },
		{ pistol: 'glock 43x' }
	]


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




	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	const dateToday = day + '/' + month + '/' + year

	const [ammoList, setAmmoList] = useState([]);

	const addAmmoBlock = (e) => {
		e.preventDefault()
		setAmmoList([...ammoList, { article: '', quantity: '' }]);
	};

	return (
		<>
			<div className={style.container}>
				<form onSubmit={handleSubmit}>

					<div>{dateToday}  ім'я інструктора</div>

					<label htmlFor="name">Призвіще клієнта: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>

					<h2>Зброя</h2>
					<div>
						<select name="pistol" id="pistol" value={pistol} onChange={(e) => {
							handlePistol(e, 'select')
						}}>
							{pistolListOption.map((item, index) => (
								<option key={index} value={item.pistol}>{item.pistol}</option>
							))}
						</select>

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
						додати зброю
					</button>

					<div>
						<label htmlFor="individually">Індивідуальне заняття </label>
						<input type="checkbox" id="individually" />
					</div>

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


				</form>
				<button
					onClick={handlePrint}
				>
					print form
				</button>
			</div>

		</>
	)
};

export { Form }