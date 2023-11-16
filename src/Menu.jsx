import "./Menu.css"
import MenuItem from "./MenuItem";
function Menu(props)
{

	
	return <>
				<MenuItem href="/" text="Начало" />
				<MenuItem href="/contacts" text="Контакти" />
				<MenuItem href="http://abv.bg" text="abv.bg" />
				
			</>

		//menu.map( el => <a href={el[1]}>{el[0]}</a>)
	

}

export default Menu;