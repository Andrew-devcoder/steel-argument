import { useEffect, useState } from "react";

import style from "./SelectTimeWorkGallery.module.scss"
import { useGallery } from "../../../state/state";

const SelectTimeWorkGallery = ({ item }) => {
	const [selectedOption, setSelectedOption] = useState('');
	const [timeLocal, setTimeLocal] = useState([]);
	const { updateTimeGallery } = useGallery()

	useEffect(() => {
		setTimeLocal(item.time)
	}, [])


	const handleChangeValue = (e) => {
		const updateValue = e.target.value
		const updateGalleryListTime = item.time.slice()
		console.log(updateGalleryListTime)
		setTimeLocal(updateGalleryListTime)
		const selectedIndex = updateGalleryListTime.findIndex(option => option.time === updateValue);

		if (selectedIndex != -1) {
			const selectedOption = updateGalleryListTime.splice(selectedIndex, 1)[0];
			updateGalleryListTime.unshift(selectedOption);
			setSelectedOption(updateValue)
		}

		const newItem = item
		updateTimeGallery(newItem, updateGalleryListTime)
	}

	return (
		<select
			// defaultValue='0:30'
			value={selectedOption}
			onChange={(e) => handleChangeValue(e)}
		>
			{timeLocal.map((el) => {

				return (
					<option
						key={`option-${Math.floor(Math.random() * 10000)}`}
						value={el.t}
					>
						{el.t}
					</option>
				)

			})}
		</select>
	)
};

export { SelectTimeWorkGallery }