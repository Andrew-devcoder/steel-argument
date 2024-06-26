
import { Bullets } from "../bullets/Bullets";
import style from "./Form.module.scss"

import { useEffect, useState } from "react";

import { TimePicker } from "../../components/time-picker/TimePicker";
import { Gallery } from "../gallery/Gallery";
import { Header } from "../header/Header";
import { useGuns } from "../../state/state";
import { Guns } from "../guns/Guns";
import { Additionally } from "../additionally/Additionally";
import { Link } from "react-router-dom";



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

					<Additionally />

					{/* <h3>інше <textarea cols={43} maxLength={300} /></h3> */}
				</form>
				<Link to="/print">

					<button
					// onClick={handlePrint}
					>
						На друк
					</button>
				</Link>
			</div>

		</>
	)
};

export { Form }