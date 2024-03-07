import { useEffect, useState } from "react";

import style from "./SelectTimeWorkGallery.module.scss"

const SelectTimeWorkGallery = ({ item }) => {


	// gen time for row gallerry
	const [time, setTime] = useState([]);

	const addToTime = () => {
		const update = [];
		for (let i = 0; i < 5; i++) {
			update.push({ hour: i, zore: "00", thirty: "30" });
		}
		setTime(update);
	};

	useEffect(() => {
		if (!item.time == '') {
			setTime(item.time)
		}
		addToTime();
		console.log(time);
	}, []);
	// 

	const handleChangeValue = (e) => {
		const newValue = e.target.value
		// item.time = newValue
		set((state) => {
			const updatedArray = state.galleryBlock.map((galleryItem, galleryIndex) => {
				if (galleryItem === item) {
					return { ...galleryItem, time: newValue };
				}
				return galleryItem;
			});
			return { galleryBlock: updatedArray };
		});

	}

	return (
		<select defaultValue='0:30' onChange={(e) => handleChangeValue(e)}>
			{time.map((item) => {
				if (item.hour == 0) {
					const formattedTime = `${item.hour}:${item.thirty}`

					return (
						<option
							key={`option-${Math.floor(Math.random() * 10000)}`}
							value={formattedTime}
						>
							{formattedTime}
						</option>
					)
				} else {
					const formattedTimeZore = `${item.hour}:${item.zore}`
					const formattedTimeThirty = `${item.hour}:${item.thirty}`

					return (
						<optgroup
							key={`option-${Math.floor(Math.random() * 10000)}`}
						>
							<option
								value={formattedTimeZore}
							>
								{formattedTimeZore}
							</option>
							<option
								value={formattedTimeThirty}
							>
								{formattedTimeThirty}
							</option>
						</optgroup>
					)
				}
			})}
		</select>
	)
};

export { SelectTimeWorkGallery }