import { useEffect, useState } from "react";
import style from "./Gallery.module.scss"
import { useGallery } from "../../state/state";
import { SelectGallery } from "./select-gallery/SelectGallery";

const { container, label, row, step, time } = style

const Gallery = () => {
	const { galleryBlock, addEmptyGalleryBlock, delGallery } = useGallery()

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
		addToTime();
		console.log(time);
	}, []);
	// 


	const addGalleryList = (e) => {
		e.preventDefault()
		addEmptyGalleryBlock()
	}

	return (
		<div className={container}>
			<h2 className={label}>Галерея</h2>
			<div>
				{galleryBlock.map((item, index) => (
					<div key={index} className={row}>
						{console.log(item)}

						<SelectGallery item={item} />

						<input
							className={step}
							type="number"
							step="1"
							min="1"
							max="6"
							placeholder="кіл-ть направлень"
						/>
						<select>
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
							}

							)}
						</select>

						<button onClick={() => handleDeleteRow(index)}>x</button>

					</div>
				))}

			</div >

			<button
				onClick={(e) => addGalleryList(e)}
			>
				додати галерею
			</button>

		</div >
	)
};

export { Gallery }