import Alert from 'react-bootstrap/Alert'

interface iProps {
	message: string,
	variant: string
}

const AlertBanner = (props: iProps) => {

	// This statement says, if the message is 'truthy' then use that message.
	// If the message is 'falsy' (an empty string is falsy), then use the message we hardcoded.
	const alertMessage = props.message || "An unexpected error occurred. Please try again later."

	const alertVariant = props.variant || "danger";

	return(
		<Alert 
			variant={alertVariant} 
			style={{ backgroundColor: 'red' }} 
		>
			{alertMessage}
		</Alert>	
	)
}

export default AlertBanner;