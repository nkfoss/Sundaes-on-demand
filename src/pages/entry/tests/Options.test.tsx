import { render, screen } from '@testing-library/react';

import Options from '../Options';

test("displays an image for each scoop-option returned from the server", async () => {
	render( <Options optionType={"scoops"} /> )

	// Get all image elements, and use type casting.
	const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i}) as HTMLImageElement[] // 'scoop' is at the end of string for img's altText
	expect(scoopImages).toHaveLength(2);

	const altText = scoopImages.map((element) => element.alt);
	expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
})

test("displays an image for each topping-option returned from the server", async () => {
	render( <Options optionType={"toppings"} /> )

	// Get all image elements, and use type casting.
	const scoopImages = await screen.findAllByRole('img', { name: /topping$/i}) as HTMLImageElement[] // 'scoop' is at the end of string for img's altText
	expect(scoopImages).toHaveLength(3);

	const altText = scoopImages.map((element) => element.alt);
	expect(altText).toEqual(["Cherries topping", "M&Ms topping", "Hot fudge topping"]);
})