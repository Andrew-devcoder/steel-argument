
import style from "./TimePicker.module.scss"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';


const TimePicker = () => {
	return (

		<LocalizationProvider dateAdapter={AdapterDayjs}>
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
		</LocalizationProvider>
	)
};

export { TimePicker }