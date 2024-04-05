
import { Routes, Route } from "react-router-dom";
// import style from "./MyRoute.module.scss"
import { Home } from "../pages/home/Home";
import { Print } from "../pages/print/Print";


const MyRoute = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/print' element={<Print />} />
		</Routes>
	)
};

export { MyRoute }