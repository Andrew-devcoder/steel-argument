
import style from "./Print.module.scss"

import { useEffect } from "react";
import { useGallery, usePrint } from "../../state/state";

const { header } = style

const Print = () => {
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	const dateToday = day + '/' + month + '/' + year

	const { galleryBlock } = useGallery()

	const { nameClient, nameInstr, indivCheck, selectTime } = usePrint()

	useEffect(() => {
		console.log(indivCheck)
	}, [])

	return (
		<>
			<div className={header}>
				<div>{dateToday}</div>
				<div>{nameClient}</div>
				<div>{nameInstr}</div>
			</div>
			<div>{indivCheck ? 'Індивідульне заняття 1 000грн' : ''}</div>
			<div>{selectTime}</div>
		</>
	)
};

export { Print }