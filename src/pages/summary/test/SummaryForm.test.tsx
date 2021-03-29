import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SummaryForm from '../SummaryForm';

test("Checkbox is unchecked by default", () => {
	render( <SummaryForm /> )

	const checkbox = screen.getByLabelText(/I agree/);
	expect(checkbox).not.toBeChecked();

})

test("Checking checkbox enables button, and unchecking disables button", () => {
	render( <SummaryForm /> )

	const button = screen.getByText("Confirm Order");
	const checkbox = screen.getByLabelText(/I agree/i);

	expect(checkbox).not.toBeChecked();
	expect(button).not.toBeEnabled();

	userEvent.click(checkbox);
	expect(button).toBeEnabled();

	userEvent.click(checkbox);
	expect(button).not.toBeEnabled();

})

test("popover responds to hover", async () => {
	render( <SummaryForm /> )

	let popover = screen.queryByText(/no ice-cream will actually be delivered/i)
	expect(popover).not.toBeInTheDocument();

	const termsAndConditions = screen.getByText(/terms and conditions/i)
	userEvent.hover(termsAndConditions);

	popover = screen.getByText(/no ice-cream will actually be delivered/i);
	expect(popover).toBeInTheDocument();

	userEvent.unhover(termsAndConditions);
	await waitForElementToBeRemoved( () =>  
		screen.queryByText(/no ice-cream will actually be delivered/i)
	);
	expect(popover).not.toBeInTheDocument();

})