import { useLocation, useParams } from "react-router-dom";
import {db} from './firestore.jsx';
import { addDoc, collection, getDocs, orderBy, query,where } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

function Contacts()
{	
	let [jdata, setJdata] = useState(null);
	let params = useParams();
	let location = useLocation();

	const usersCollectionRef = collection(db, 'user');
	
	const createUser = async () => {
		await addDoc(usersCollectionRef, {name: 'Viki', age:21});
	};

	const getUsers = async () => {
        const data = await getDocs(query(usersCollectionRef, where("age", ">", 10)  ));//, orderBy("age"), orderBy("name") ));
		
		let data2 = data.docs.map((doc)=>({...doc.data(), id:doc.id}));

		data2 = data2.sort((a,b)=> 	{
												if(a.name==b.name) 
													return a.age<b.age;
												else
													return a.name>b.name;
										}
								);
        setJdata(data2);
 };


	return <div>Контакти. ID: {params.id}
				<button id='1' onClick={createUser}>Добави потребител</button>
				<button id='2' onClick={getUsers}>Всички потребители</button>
				<hr/>
				{jdata!=null?jdata.map(doc => <div key={doc.id}>{doc.id}: {doc.name}, {doc.age}</div>):""}
			</div>;
}

export default Contacts;

