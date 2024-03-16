import { useEffect, useState } from "react";
import { SelectGallery } from "./select-gallery/SelectGallery";

import { RxCrossCircled } from "react-icons/rx";

import style from "./Gallery.module.scss"
import { SelectTimeWorkGallery } from "./select-time-work-gallery/SelectTimeWorkGallery";
import { useGallery } from "../../state/state";
import { AmountGallery } from "./amount-gallery/AmountGallery";


const { container, label, row, step, time } = style

const Gallery = () => {
	const { galleryBlock, addEmptyGalleryBlock, delGallery } = useGallery()

	const addGalleryList = (e) => {
		e.preventDefault()
		addEmptyGalleryBlock()
	}

	const handleDeleteRow = (index) => {
		// delGallery(index)
	}

	return (

		<div className={container}>
			<h2 className={label}>Галерея</h2>
			<div>
				{galleryBlock.map((item, index) => {
					const key = Math.floor(Math.random() * 10000)
					return (
						<div key={key} className={row}>
							{console.log(item)}

							<SelectGallery item={item} />

							<AmountGallery item={item} />

							<SelectTimeWorkGallery item={item} />

							<RxCrossCircled onClick={() => handleDeleteRow(index)} />

						</div>
					)
				})}

			</div>

			< button
				onClick={(e) => addGalleryList(e)}
			>
				додати галерею
			</ button>

		</div >

	)
};

export { Gallery }