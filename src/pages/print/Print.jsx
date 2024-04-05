
// import style from "./Print.module.scss"

import { useEffect } from "react";
import { useGallery, usePrint } from "../../state/state";


const Print = () => {
	const date = new Date()
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	const dateToday = day + '/' + month + '/' + year

	const { galleryBlock } = useGallery()

	const { nameClient, nameInstr } = usePrint()

	useEffect(() => {
		console.log(galleryBlock)
	}, [])

	return (
		<>
			<div>{dateToday}</div>
			<div>{nameClient}</div>
			<div>{nameInstr}</div>

		</>
	)
};

export { Print }