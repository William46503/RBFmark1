import React, { useState } from 'react';
import Inputfield from './InputField';
import { Button, Icon } from 'semantic-ui-react';
import nextId from 'react-id-generator';

function Dataform() {
	const [ Input, setInput ] = useState('');
	const [ Objectlist, setObjectList ] = useState([]);

	const [ InputObject, setInputObject ] = useState({
		companyNumber: Number,
		companyInfo: {
			startYear: Number,
			startMonth: Number,
			endYear: Number,
			endMonth: Number,
			companyName: '',
			country: ''
		}
	});

	let uniqueID = nextId();

	console.log(uniqueID);
	console.log(Objectlist);
	console.log(Objectlist.length);
	const itemArrayHandler = (e) => {
		switch (e.target.name) {
			case 'addBtn':
				console.log('addArrayHandler');
				setObjectList((Objectlist) => Objectlist.concat(uniqueID));

				break;
			case 'removeBtn':
				console.log('removeArrayHandler');
				break;
			default:
				break;
		}
	};

	const PrinterHandler = () => {
		// switch (e.target.name) {
		// 	case 'addBtn':
		// 		console.log('addArrayHandler');
		// 		setObjectList({
		// 			InputObject
		// 		});
		// 		console.log(Objectlist);
		// 		console.log(Objectlist.companyInfo.companyName);
		// 		console.log(Objectlist.length);
		// 		break;
		// 	case 'removeBtn':
		// 		console.log('removeArrayHandler');
		// 		break;
		// 	default:
		// 		break;
		// }
	};

	// console.log(InputObject);
	const setInputHandler = (e) => {
		switch (e.target.name) {
			case 'startYear':
				setInputObject({
					...InputObject,
					startYear: e.target.value
				});
				break;
			case 'startMonth':
				setInputObject({ ...InputObject, startMonth: e.target.value });
				break;
			case 'endYear':
				setInputObject({ ...InputObject, endYear: e.target.value });
				break;
			case 'endMonth':
				setInputObject({ ...InputObject, endMonth: e.target.value });
				break;
			case 'companyName':
				setInputObject({ ...InputObject, companyName: e.target.value });
				break;
			case 'country':
				setInputObject({ ...InputObject, country: e.target.value });
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<form>
				<Inputfield setInput={setInputHandler} setItemArray={itemArrayHandler} />
			</form>
			<div className="btnSection">
				<Button inverted color="teal" className="btn" name="addBtn" onClick={itemArrayHandler}>
					Add
				</Button>
				{/* <Button inverted color="red" className="btn" name="removeBtn" onClick={itemArrayHandler}>
					Remove
				</Button> */}
				<Button inverted color="green" className="btn" name="printBtn" onClick={PrinterHandler}>
					Print Out
				</Button>
			</div>
		</div>
	);
}

export default Dataform;
