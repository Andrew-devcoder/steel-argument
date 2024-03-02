
import { useEffect, useState } from "react";
import style from "./Gallery.module.scss"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';


const galleryListOption = [
	{ gallery: 'Тир 100м' },
	{ gallery: 'Тир 100м Рухома мішень' },
	{ gallery: 'Практичний малий тир' },
	{ gallery: 'Практичний великий тир' },
	{ gallery: 'Класичний 25м тир' },
]

const { container, label, row, step, time } = style

const Gallery = () => {
	const [time, setTime] = useState([]);

	const addToTime = () => {
		const update = [];

		for (let i = 0; i < 10; i++) {
			update.push({ hour: i, zore: "00", thirty: "30" });
		}

		setTime(update);
	};

	useEffect(() => {
		addToTime();
		console.log(time);
	}, []);

	const [galleryList, setGalleryList] = useState([{ gallery: '' }])
	const handleGallery = (e, index) => {
		const selectedGallery = e.target.value
		const updateList = [...galleryList]
		updateList[index] = { gallery: selectedGallery }
		setGalleryList(updateList)
	}

	const addGalleryList = (e) => {
		e.preventDefault()
		setGalleryList([...galleryList, { gallery: '' }])
	}

	return (
		<div className={container}>
			<h2 className={label}>Галерея</h2>
			<div >
				{galleryList.map((item, index) => (
					<div key={index} className={row}>
						<select
							name={`gallery-${index}`}
							id={`gallery-${index}`}
							value={item.gallery}
							onChange={(e) => handleGallery(e, index)}
						>
							{galleryListOption.map((option, optionIndex) => (

								< option
									key={optionIndex}
									value={option.gallery}
								>
									{option.gallery}
								</option>
							))}
						</select>
						<input
							className={step}
							type="number"
							step="1"
							min="1"
							max="6"
							placeholder="кіл-ть направлень"
						/>
						{/* <input
							className={time}
							type="number"
							placeholder="час"
						/> */}

						<select>
							{time.map((item, index) => {

								if (item.hour == 0) {
									const formattedTime = `${item.hour}:${item.thirty}`

									return (
										<option
											key={index}
											value={formattedTime}
										>
											{formattedTime}
										</option>
									)
								} else {
									const formattedTimeZore = `${item.hour}:${item.zore}`
									const formattedTimeThirty = `${item.hour}:${item.thirty}`

									return (
										<>

											<option
												key={index}
												value={formattedTimeZore}
											>
												{formattedTimeZore}
											</option>
											<option
												key={index}
												value={formattedTimeThirty}
											>
												{formattedTimeThirty}
											</option>
										</>
									)

								}
							}

							)}
						</select>


						{/* <LocalizationProvider dateAdapter={AdapterDayjs}>

							<MobileTimePicker
								ampmInClock={true}
							/>
						</LocalizationProvider> */}
					</div>
				))}
			</div >

			<button
				onClick={(e) => addGalleryList(e)}
			>
				додати галерею
			</button>

		</div >
	)
};

export { Gallery }