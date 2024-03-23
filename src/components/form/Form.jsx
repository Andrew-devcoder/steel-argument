
import { Bullets } from "../bullets/Bullets";
import style from "./Form.module.scss"

import { useEffect, useState } from "react";

import { TimePicker } from "../../components/time-picker/TimePicker";
import { Gallery } from "../gallery/Gallery";
import { Header } from "../header/Header";
import { useGuns } from "../../state/state";
import { Guns } from "../guns/Guns";



const Form = () => {
	const { pistolList, riflesList } = useGuns()
	const [pistolListLocal, setPistolListLocal] = useState([])
	const [riflesListLocal, setRiflesListLocal] = useState([])

	useEffect(() => {
		setPistolListLocal(pistolList)
		setRiflesListLocal(riflesList)
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(name)
	}

	const handlePrint = () => {
		// const timeOverH = date.getHours()
		// const timeOverM = date.getMinutes()
		// const timeOver = `${timeOverH} : ${timeOverM}`
		// setFinishTime(timeOver)

		window.print()

	}
	return (
		<>
			<div className={style.container}>
				<form onSubmit={handleSubmit}>

					<Header />

					<TimePicker />

					<Gallery />

					{/* <PistolList pistolListLocal={pistolListLocal} /> */}
					<Guns gunList={pistolListLocal} />
					<Guns gunList={riflesListLocal} />

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