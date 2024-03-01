
import { useState } from "react";
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

const { row, step, time } = style

const Gallery = () => {
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
		<>
			<h2>Галерея</h2>
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
						<LocalizationProvider dateAdapter={AdapterDayjs}>

							<MobileTimePicker
								ampmInClock={true}
							/>
						</LocalizationProvider>
					</div>
				))}
			</div >

			<button
				onClick={(e) => addGalleryList(e)}
			>
				додати галерею
			</button>

		</>
	)
};

export { Gallery }