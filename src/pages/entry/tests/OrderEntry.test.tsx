import { render, screen, waitFor } from '@testing-library/react'
import OrderEntry from '../OrderEntry'
import { rest } from 'msw';
import { server } from '../../../mocks/server'


test("handles errors for scoops and toppings routes", async () => {
	server.resetHandlers(
		rest.get('http://localhost:3030/scoops', (req, res, ctx) => 
			res(ctx.status(500))
		),
		rest.get('http://localhost:3030/toppings', (req, res, ctx) => 
			res(ctx.status(500))
		),
	)

	render( <OrderEntry /> );

	// This might look weird... we are trying to wait for 2 alert elements to be on the screen.
	// If we use the conventional method of `await screen.findAllByRole(alert)`
	// ... then it will only wait for the first one. This will fail, because we are expecting 2.
	await waitFor( async() => {
		const alerts = await screen.findAllByRole('alert')
		expect(alerts).toHaveLength(2);
	})

	
})