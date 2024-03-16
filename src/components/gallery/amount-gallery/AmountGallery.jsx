
import style from "./AmountGallery.module.scss"


const AmountGallery = ({ item }) => {

	return (
		<>
			<input
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