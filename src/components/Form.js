import React, { useContext, useState } from "react";
import { Table } from "react-bootstrap";


const Form = ({handleChange ,text}) => {
	return (
		<Table>
			<tbody>
				{/* <tr>
					<td>
						<label>name</label>
						<input
							name="name"
							value={text.name}
							onChange={(e) => handleChange(e)}
							type="text"
						/>
					</td>
				</tr> */}

				<tr>
					<td>
						<label>amount</label>
						<input
							name="amount"
							value={text}
							onChange={(e) => handleChange(e)}
							type="number"
						/>
					</td>
				</tr>
			</tbody>
		</Table>
	);
};

export default Form;
