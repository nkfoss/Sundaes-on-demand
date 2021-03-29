import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Popover } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const SummaryForm = () => {

	// We have boolean a value 'tcChecked' that is set by function 'setTcChecked', and initial state is FALSE
	const [tcChecked, setTcChecked] = useState(false);
	
	const popover = (
		<Popover id="popover-basic">
			<Popover.Content>
				No ice-cream will actually be delivered
			</Popover.Content>
		</Popover>
	)

	const checkboxLabel = (
		<span>
			I agree to 
			<OverlayTrigger placement="right" overlay={popover}>
				<span style={{ color: 'blue' }}> 
					Terms and Conditions 
				</span>
			</OverlayTrigger>
		</span>
	)

	return (
		<Form> 
			<Form.Group controlId="terms-and-conditions">
				<Form.Check 
					type="checkbox"
					checked={tcChecked}
					onChange={(e) => setTcChecked(e.target.checked)}
					label={checkboxLabel}
				/>
			</Form.Group>
			<Button
				variant="primary"
				type="submit"
				disabled={!tcChecked}
			>
				Confirm Order
			</Button>
		</Form>
	)
}


export default SummaryForm;