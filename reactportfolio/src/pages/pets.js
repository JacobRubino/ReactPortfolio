
import React from 'react'
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import petimg1 from "../assets/images/IMG_0821.png"
import petimg2 from "../assets/images/IMG_1084.png"
import petimg3 from "../assets/images/IMG_0834.png"  
import petimg4 from "../assets/images/IMG_1159.png" 


const Pets = () => {
  return (
    <div>
    <Card style={{ width: '20rem', height: 'auto' }}>
      <Card.Img variant="top" src={petimg1} />
      <Card.Body>
        <Card.Title>Gemma</Card.Title>
        <Card.Text>
          My dog Gemma, named by my granmother shes an adorable heap of fun who never stops moving around
        </Card.Text>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '20rem', height: 'auto' }}>
      <Card.Img variant="top" src={petimg2} />
      <Card.Body>
        <Card.Title>Bruno</Card.Title>
        <Card.Text>
          Bruno is slightly lazier, probably because of his short legs, but loves pets and company
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem', height: 'auto' }}>
      <Card.Img variant="top" src={petimg3} />
      <Card.Body>
        <Card.Title>Together</Card.Title>
        <Card.Text>
          Together, Gemma chases bruno around the house, until he gets tired of it and stars chasing her back
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem', height: 'auto' }}>
      <Card.Img variant="top" src={petimg4} />
      <Card.Body>
        <Card.Title>Gemmas a little crazy</Card.Title>
        <Card.Text>
          She loves ledges and edges, and anything that looks like it may be uncomfortable
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Pets;