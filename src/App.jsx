import { ErrorBoundary } from "react-error-boundary";
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Body from './Body'
import Menu from './Menu'
import mikey from './assets/mickey.bmp'
import minnie from './assets/minnie.png'
import { useEffect } from 'react'
import { useRef } from 'react'
import { createContext } from 'react'

function Fallback()
{
	return <h2 style={{color:"red", border:'1px solid red'}}>Error</h2>
}


function App(props) {  

	let [mickeyImage, setMickeyImage] = useState(true);
	let [val, setVal] = useState("");
	

	let [age, setAge] = useState(0)
	let count = useRef(0);	

	let image = useRef();

	useEffect(	() =>
				{
					//console.log('Зареждане на първоначални данни');
					count.current = 10;
				},
				[]
	);

	useEffect(	() =>
				{
					console.log('age се промени: '+age);

				},
				[age]
	);
	
	function uvelichi(number)
	{
		//setAge(age + number);

		setAge((age) => age + number);

		count.current ++;
		console.log("count: "+count.current);
	}

	function changeImg()
	{
		setMickeyImage(!mickeyImage);
		//dokument.getElementById("img").src = minnie;
		//image.current.src = minnie;
	}
	//{productId}
	let productId='test 123';
	async function handleSubmit(e) {
		e.preventDefault();   
		const data = new FormData(e.target);
		
		  console.log(Array.from(data.entries()).map(([var1, value]) => {
				//let {var1, value} = varArr;
				let o = {};
				o[var1] = value;
			  return o; }));
	}

	function save(formData) {
		
		const content = formData.get("productId");
		alert(`Your draft of '${content}' has been saved!`);
	  }
	
	
  return (
    <div id="page">
		
		id: {props.id}
		
		
		<br/><br/>

		Години: {age}	{" "}
				<button onClick={()=>{	uvelichi(1);
										
										}}
										>Увеличи с 1</button>
		<Body age={age} uvelichi={uvelichi}/>		
				
		
		<br/><br/>
		Здравей :)
		<img style={{margin:"5px",height:"100px",width:"90px",border:"2px solid black",background:"white",borderRadius:"30px",padding:"5px"}} ref={image} src={mickeyImage?mikey:minnie}  onClick={changeImg} />
		
		

		<br/><br/>
		<br/><br/>

										

	
		</div>
  )
}

export default App


{/* <form onSubmit={handleSubmit}>
<input type="hidden" name="productId" value={productId} />
<input type="checkbox" name="Yes" value={1}/> Yes
<input type="radio" name="radio1" value={1}/> Yes
<button>Add to Cart</button>
<button>Save draft</button>
<input value="тест" readOnly={true}  />
<input defaultValue="тест"/>
</form> */}
