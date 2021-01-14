import React from 'react';
import { Button } from 'semantic-ui-react';


function Inputfield({ setInput, setItemArray }) {
	return (
		<div className="InputContainer">
			<h2>1.</h2>
			<div className="InputFieldWrapper">
				<div className="DateInputContainer">
					<input name="startYear" className="DateInput" type="number" placeholder="Year" onInput={setInput} />
					<label>年</label>
					<input
						name="startMonth"
						className="DateInput"
						type="number"
						placeholder="Month"
						onInput={setInput}
					/>
					<label>月</label>
					<label> ー </label>
					<input name="endYear" className="DateInput" type="number" placeholder="Year" onInput={setInput} />
					<label>年</label>
					<input name="endMonth" className="DateInput" type="number" placeholder="Month" onInput={setInput} />
					<label>月</label>
				</div>

				<div className="companyInput">
					<input
						name="companyName"
						className="CompanyInput"
						type="text"
						placeholder="Company Name"
						onInput={setInput}
					/>
					<input
						name="country"
						className="CountryInput"
						type="text"
						placeholder="Country"
						onInput={setInput}
					/>
				</div>
			</div>
			<Button inverted color="red" className="InputFieldDeleteBtn" name="removeBtn" onClick={setItemArray}>
				<i className="trash alternate icon" style={{ marginRight: '0' }} />
			</Button>
		</div>
	);
}

export default Inputfield;
