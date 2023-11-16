import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Contacts from "./Contacts";
import Header from "./Header";
import Menu from "./Menu";
export const ColorContext = createContext()
function Page()
{

	return <BrowserRouter>			
			<Header/>
			<ColorContext.Provider value="cyan">
				<Menu />
			</ColorContext.Provider>
			
			<Routes>				
				<Route path="/contacts/:id?/:orderID?" element={<Contacts />} />

				<Route path="/" element={<App id="10"/>} />

				<Route path="*" element={<App/>} />
			</Routes>
			</BrowserRouter>
}

export default Page;