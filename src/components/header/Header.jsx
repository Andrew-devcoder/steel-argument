
import { useState } from "react";
import style from "./Header.module.scss"

const { dateDisplay, bio, checkbox } = style

const Header = () => {

	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	const dateToday = day + '/' + month + '/' + year

	const [name, setName] = useState('')

	return (
		<>
			<div className={dateDisplay}>{dateToday}</div>

			<div className={bio}><input placeholder="Призвіще клієнта" type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<input type="text" placeholder="ім'я інструктора" /></div>

			<div className={checkbox}>
				<label htmlFor="individually">Індивідуальне заняття </label>
				<input type="checkbox" id="individually" />
			</div>

		</>
	)
};

export { Header }