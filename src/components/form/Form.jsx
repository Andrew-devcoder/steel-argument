
import { Bullets } from "../bullets/Bullets";
import { PistolList } from "../guns/pistols/pistol-list/PistolList";
import style from "./Form.module.scss"

import { useState } from "react";

import { TimePicker } from "../../components/time-picker/TimePicker";
import { Gallery } from "../gallery/Gallery";



const Form = () => {
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	const dateToday = day + '/' + month + '/' + year

	const [finishTime, setFinishTime] = useState('')

	const handlePrint = () => {
		// const timeOverH = date.getHours()
		// const timeOverM = date.getMinutes()
		// const timeOver = `${timeOverH} : ${timeOverM}`
		// setFinishTime(timeOver)

		window.print()
	}

	const [name, setName] = useState('')

	const handleSubmit = (e) => {
		e.preventDefaukt()
		console.log(name)
	}


	// 



	//   

	return (
		<>
			<div className={style.container}>
				<form onSubmit={handleSubmit}>

					<div>{dateToday} {finishTime}  ім'я інструктора</div>

					<label htmlFor="name">Призвіще клієнта: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>

					<div>
						<label htmlFor="individually">Індивідуальне заняття </label>
						<input type="checkbox" id="individually" />
					</div>




					<TimePicker />

					<Gallery />

					<PistolList />

					<Bullets />

					<h3>мішень  <input type="number" style={{ width: '40px' }} /></h3>
					<h3>мішень кабан  <input type="number" style={{ width: '40px' }} /></h3>
					<h3>активні навушники  <input type="number" style={{ width: '40px' }} /></h3>


					{/* <h3>інше <textarea cols={43} maxLength={300} /></h3> */}
				</form>
				<button
					onClick={handlePrint}
				>
					На друк
				</button>
			</div>

		</>
	)
};

export { Form }