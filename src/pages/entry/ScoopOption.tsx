import Col from 'react-bootstrap/Col'
import { iData } from './Options'


const ScoopOption = (props: iData) => {
	return (
		<Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center'}}>
			<img 
				style={{ width: '75%' }}
				src={`http://localhost:3030/${props.imagePath}`} 
				alt={`${props.name} scoop`}
			/>
		</Col>
	)
}

export default ScoopOption;