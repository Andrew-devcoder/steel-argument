import { useEffect, useState } from "react";

import style from "./SelectTimeWorkGallery.module.scss"

const SelectTimeWorkGallery = ({ item }) => {
	// gen time for row gallerry
	const [time, setTime] = useState([]);

	useEffect(() => {
		setTime(item.time)
	}, [])


	return (
		<select defaultValue='0:30'
		// onChange={(e) => handleChangeValue(e)}
		>
			{time.map((item) => {

				return (
					<option
						key={`option-${Math.floor(Math.random() * 10000)}`}
						value={item.time}
					>
						{item}
					</option>
				)

			})}
		</select>
	)
};

export { SelectTimeWorkGallery }