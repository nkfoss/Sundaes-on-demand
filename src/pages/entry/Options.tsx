import axios from 'axios'
import Row from 'react-bootstrap/Row'
import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption'
import ToppingOption from './ToppingOption';

// Data type resceived from server
export interface iData {
	name: string;
	imagePath: string
}

interface iProps {
	optionType: string
}

const Options = (props: iProps) => {
	
	const [items, setItems] = useState([]);

	// Use effect runs it's function at least once (on component mount).
	// In addition, it will run the function again whenever any parameter in the array changes.
	// We include the props in this array, but for our app, these props will never change in the context the component is used.
	useEffect(() => {
		axios
			.get(`http://localhost:3030/${props.optionType}`)
			.then((response) => setItems(response.data))
			.catch((error) => { 
				// TODO 
			}) 
	}, [props.optionType]);

	const ItemComponent = props.optionType === "scoops" ? ScoopOption : ToppingOption;

	const optionItems = items.map((item: iData) => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} /> )

	return (
		<Row>
			{optionItems}
		</Row>
	)
}

export default Options;