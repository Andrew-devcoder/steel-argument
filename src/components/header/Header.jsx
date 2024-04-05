
import { useState } from "react";
import style from "./Header.module.scss"
import { usePrint } from "../../state/state";

const { dateDisplay, bio, checkbox } = style

const Header = () => {

	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	const dateToday = day + '/' + month + '/' + year

	const { setNameClient, setNameInstr } = usePrint()


	const [nameLocalClient, setNameLocalClient] = useState('')

	const handleNameClient = () => {
		setNameClient(nameLocalClient)
	}

	const [nameLocalInstr, setNameLocallInstr] = useState('')


	const handleNameInstr = () => {
		setNameInstr(nameLocalInstr)
	}

	return (
		<>
			<div className={dateDisplay}>{dateToday}</div>

			<div className={bio}>
				<input
					placeholder="Призвіще клієнта"
					type="text"
					value={nameLocalClient}
					onChange={(e) => setNameLocalClient(e.target.value)}
					onBlur={handleNameClient}
				/>
				<input
					placeholder="ім'я інструктора"
					type="text"
					value={nameLocalInstr}
					onChange={(e) => setNameLocallInstr(e.target.value)}
					onBlur={handleNameInstr}
				/>
			</div>

			<div className={checkbox}>
				<label htmlFor="individually">Індивідуальне заняття </label>
				<input type="checkbox" id="individually" />
			</div>

		</>
	)
};

export { Header }