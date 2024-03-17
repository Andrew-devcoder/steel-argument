
import { useEffect, useState } from "react";
import { useGallery } from "../../../state/state";
import style from "./SelectGallery.module.scss"

const SelectGallery = ({ item }) => {
	const [selectedOption, setSelectedOption] = useState('');
	const [list, setList] = useState([])

	const { updateGalleryOption } = useGallery()

	useEffect(() => {
		setList(item.galleryListOption)
	}, [])

	useEffect(() => {
		console.log('list : ', list)
	}, [list])

	const handleOptionChange = (e) => {
		const selectedValue = e.target.value;
		const updatedGalleryListOption = item.galleryListOption.slice();
		setList(updatedGalleryListOption)
		const selectedIndex = updatedGalleryListOption.findIndex(option => option.gallery === selectedValue);

		if (selectedIndex !== -1) {
			const selectedOption = updatedGalleryListOption.splice(selectedIndex, 1)[0];
			updatedGalleryListOption.unshift(selectedOption);
			setSelectedOption(selectedValue);
		}
		const newItem = item
		updateGalleryOption(newItem, updatedGalleryListOption)
		console.log(list)
	};

	return (
		<select
			value={selectedOption}
			onChange={handleOptionChange}
		>
			{list.map((option, index) => (
				<option
					key={index}
					value={option.gallery}
				>
					{option.gallery}
				</option>
			))}
		</select>
	);
};

export { SelectGallery }