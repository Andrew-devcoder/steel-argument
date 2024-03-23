import { useEffect, useState } from "react";
import style from "./TimePicker.module.scss"

const TimePicker = () => {
	const [timeH, setTimeH] = useState([])
	const [timeM, setTimeM] = useState([])

	const addToTimeHArray = () => {
		const update = []

		for (let i = 10; i < 21; i++) {
			update.push({ time: i });
		}

		setTimeH(update)
	};

	const addToTimeMArray = () => {
		const update = []

		for (let i = 0; i < 56; i += 5) {
			let timeValue = i < 10 ? `0${i}` : `${i}`;
			update.push({ time: timeValue });
		}

		setTimeM(update)
	};

	useEffect(() => {
		addToTimeHArray();
		addToTimeMArray();
		console.log(timeH)
		console.log(timeM)
	}, []);

	return (
		<>

			<div className={style.wrapper}>

				<select name="timeH" >
					{timeH.map((obj, index) => (
						<option key={index} value={obj.time}>
							{obj.time}
						</option>
					))}
				</select>
				<div>:</div>
				<select name="timeM" >
					{timeM.map((obj, index) => (
						<option key={index} value={obj.time}>
							{obj.time}
						</option>
					))}
				</select>
				<div> - </div>
				<select name="timeH" >
					{timeH.map((obj, index) => (
						<option key={index} value={obj.time}>
							{obj.time}
						</option>
					))}
				</select>
				<div>:</div>
				<select name="timeM" >
					{timeM.map((obj, index) => (
						<option key={index} value={obj.time}>
							{obj.time}
						</option>
					))}
				</select>

			</div>
		</>

	)
};

export { TimePicker }