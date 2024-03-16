
import { useEffect, useState } from "react";
import { useGallery } from "../../../state/state";
import style from "./SelectGallery.module.scss"

const SelectGallery = ({ item }) => {
	const { value, setValue } = useState('')
	const { updateGalleryOption } = useGallery();

	const handleOptionChange = (e) => {
		const selectedValue = e.target.value;
		updateGalleryOption(item, selectedValue);
	};

	useEffect(() => { // Виправив параметри useEffect
		if (Array.isArray(item.galleryListOption)) {
			console.log(true);
		}
	}, [])


	return (
		<select
			name={`gallery-${item}`}
			id={`gallery-${item}`}
			value={value}
			onChange={(e) => handleOptionChange(e)} // Викликаємо метод для оновлення стану при зміні значення
		>
			{item.galleryListOption.map((option, optionIndex) => (
				<option
					key={optionIndex}
					value={option.gallery}
				>
					{option.gallery}
				</option>
			))}
		</select>
	);
};

export { SelectGallery };
