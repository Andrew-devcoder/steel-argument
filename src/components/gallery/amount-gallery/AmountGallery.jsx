
import { useEffect, useState } from "react";
import style from "./AmountGallery.module.scss"


const AmountGallery = ({ item }) => {
	const [value, setValue] = useState('')

	useEffect(() => {
		setValue(item.amount)
	}, [])

	const handleChangeValue = (e) => {
		const updateValue = e.target.value
		setValue(updateValue)
		item.amount = updateValue
	}

	return (
		<>
			<input
				value={value || ''}
				onChange={handleChangeValue}
				// className={step}
				type="number"
				step="1"
				min="1"
				max="6"
				placeholder="кіл-ть направлень"
			/>
		</>
	)
};

export { AmountGallery }