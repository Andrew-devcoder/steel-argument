import { useEffect, useState } from "react";
import { usePersonStore } from "../../state/state.tsx";
import { SelectGallery } from "./select-gallery/SelectGallery";

import { RxCrossCircled } from "react-icons/rx";

import style from "./Gallery.module.scss"
import { SelectTimeWorkGallery } from "./select-time-work-gallery/SelectTimeWorkGallery";

const { container, label, row, step, time } = style

const Gallery = () => {
	// const { galleryBlock, addEmptyGalleryBlock, delGallery } = useGallery()
	const firstName = usePersonStore((state) => state.firstName)
	const updateFirstName = usePersonStore((state) => state.updateFirstName)

	const addGalleryList = (e) => {
		e.preventDefault()
		// addEmptyGalleryBlock()
	}

	const handleDeleteRow = (index) => {
		// delGallery(index)
	}

	return (
		<>
			<input type="text"
				onChange={(e) => updateFirstName(e.currentTarget.value)}
				value={firstName}
			/>

			<p>hey fucking {firstName}!</p>
		</>

		// <div className={container}>
		// 	<h2 className={label}>Галерея</h2>
		// 	<div>
		// 		{galleryBlock.map((item, index) => {
		// 			const key = Math.floor(Math.random() * 10000)
		// 			return (
		// 				<div key={key} className={row}>
		// 					{console.log(item)}

		// 					<SelectGallery item={item} />

		// 					<input
		// 						className={step}
		// 						type="number"
		// 						step="1"
		// 						min="1"
		// 						max="6"
		// 						placeholder="кіл-ть направлень"
		// 					/>

		// 					<SelectTimeWorkGallery item={item} />

		// 					<RxCrossCircled
		// 						onClick={() => handleDeleteRow(index)}
		// 					/>

		// 					{/* <button type="button" onClick={() => handleDeleteRow(index)}>x</button> */}

		// 				</div>
		// 			)
		// 		})}

		// 	</div>

		// 	< button
		// 		onClick={(e) => addGalleryList(e)}
		// 	>
		// 		додати галерею
		// 	</ button>

		// </div >

	)
};

export { Gallery }