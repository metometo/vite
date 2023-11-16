import { useContext } from "react";
import { ColorContext } from "./Page";


function MenuItem(props)
{
	const redColor = useContext(ColorContext);

	return <a style={{color:redColor}} href={props.href}>{props.text}</a> 
}

export default MenuItem;