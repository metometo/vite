
function Body(props)
{
	return  <>
				Години: {props.age}	{" "}
				<button onClick={()=>{props.uvelichi(1)}}>Увеличи с 1</button>
				<button>Увеличи с 5</button>
			</>

}

export default Body