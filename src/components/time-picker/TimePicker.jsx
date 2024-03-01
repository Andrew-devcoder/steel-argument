
import style from "./TimePicker.module.scss"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';

const TimePicker = () => {
	return (
		<>
			<div className={style.wrapper}>
				<input type="number" placeholder="початок" />
				<input type="number" placeholder="кінець" />
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