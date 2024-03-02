
import style from "./TimePicker.module.scss"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';
import { useEffect, useState } from "react";





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
			update.push({ time: i });
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
				{/* <input type="number" placeholder="початок" />
				<input type="number" placeholder="кінець" /> */}

				<select name="timeH" >
					{timeH.map((obj, index) => (

						<option key={index} value={obj.time}>
							{obj.time}
						</option>
					))}
				</select>

				<select name="timeM" >
					{timeM.map((obj, index) => (

						<option key={index} value={obj.time}>
							{obj.time}
						</option>
					))}
				</select>

			</div>

			{/* 		<LocalizationProvider dateAdapter={AdapterDayjs}>

				<DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
					<DemoItem label="Digital clock">
						<DigitalClock />
					</DemoItem>
				</DemoContainer>

				<div className={style.wrapper}>

					<MobileTimePicker
						ampmInClock={true}
						label="початок тренування"
						minutesStep={30}
					/>

					<MobileTimePicker
						ampmInClock={true}
						label="кінець тренування"
						minutesStep={30}
					/>

				</div>
			</LocalizationProvider> */}
		</>

	)
};

export { TimePicker }