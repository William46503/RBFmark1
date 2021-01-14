import React from 'react';
import Dataform from './Component/DataInputField';
import DataOutput from './Component/DataOutput';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './css/App.css';

export default function App() {
	return (
		<div className="App">
			<Dataform />

			<section className="Output-area">
				<DataOutput />
			</section>
		</div>
	);
}
