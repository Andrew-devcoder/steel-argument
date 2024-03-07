
import style from "./SelectGallery.module.scss"


const SelectGallery = ({ item }) => {

	return (
		<>
			<select
				name={`gallery-${item}`}
				id={`gallery-${item}`}
				value={item.gallery}
				onChange={(e) => e.target.value}
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

		</>
	)
};

export { SelectGallery }