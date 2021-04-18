import {Col, Button, Card} from 'react-bootstrap';
const Grid = (props)=>{
    return (<Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            src={props.image}
          />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.desc}
            </Card.Text>
            <Button variant='primary' onClick={()=>window.open(props.link)}>Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>);
}

export default Grid;