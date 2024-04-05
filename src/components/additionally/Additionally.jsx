
import style from "./Additionally.module.scss"

const { container, label, row } = style

const Additionally = () => {
	return (
		<div className={container}>

			<h2 className={label}>Додатково</h2>

			<div className={row}>
				<h4>Мішень</h4>
				<input type="number" />
			</div>

			<div className={row}>
				<h4>Мішень кабан</h4>
				<input type="number" />
			</div>

			<div className={row}>
				<h4>Активні навушники </h4>
				<input type="number" />
			</div>


		</div>
	)
};

export { Additionally }