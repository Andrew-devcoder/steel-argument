import { useEffect, useState } from "react";
import { useGallery } from "../../../state/state";
import style from "./SelectTimeWorkGallery.module.scss"

const SelectTimeWorkGallery = ({ item }) => {
	const [selectedOption, setSelectedOption] = useState('');
	const [timeLocal, setTimeLocal] = useState([]);

	const { updateTimeGallery } = useGallery();

	useEffect(() => {
		setTimeLocal(item.timeWorkGallery);
	}, [item.timeWorkGallery]);

	const handleChangeValue = (e) => {
		const updateValue = e.target.value;
		const updateGalleryListTime = item.timeWorkGallery.slice();
		setTimeLocal(updateGalleryListTime);
		const selectedIndex = updateGalleryListTime.findIndex(option => option.t === updateValue);

		if (selectedIndex !== -1) {
			const selectedOption = updateGalleryListTime.splice(selectedIndex, 1)[0];
			updateGalleryListTime.unshift(selectedOption);
			setSelectedOption(updateValue);
		}

		const newItem = item;
		updateTimeGallery(newItem, updateGalleryListTime);
	};

	return (
		<select
			value={selectedOption}
			onChange={handleChangeValue}
		>
			{timeLocal.map((el, index) => (
				<option
					key={index}
					value={el.t}
				>
					{el.t}
				</option>
			))}
		</select>
	);
};

export { SelectTimeWorkGallery };
