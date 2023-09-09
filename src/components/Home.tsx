import React, {useState, useEffect, ReactNode} from 'react'
import { 
  Button, 
  Card,
  Container,
  Row,
  Col,
  Navbar,
  Form,
  InputGroup,
  ListGroup
} from 'react-bootstrap';
import fs from 'fs'
import axios from 'axios'

export default function Home() {
  const [inventoryItemArr, setInventoryItemArr] = useState()
  const [localPhotoDBPath, setLocalPhotoDBPath] = useState()

  // - SKU File Structure
  //        - 12203.png
  //        - 1294814583.png
  //        - 1294813434.png
  //        - 1294813384.png

  const getAllPhotosBySku = (sku: string): string[] => {
    const photos: string[] = []
    // fs.readdirSync()

    return photos
  }

  const renderGetPhotoCard = (): ReactNode => {
    return (
      // <div>
      //   <h2>Find Photos By SKU</h2>

      //   <Button variant='success'></Button>
      // </div>
      <Card style={{width: '300px', margin: 'auto'}}>
        <Card.Header>Find Photo By SKU</Card.Header>
        <Card.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="sku-input">SKU</InputGroup.Text>
            <Form.Control
              placeholder="SKU"
              aria-label="SKU"
              aria-describedby="sku-input"
            />
          </InputGroup>
          <Button variant="primary">Fetch</Button>
        </Card.Body>
      </Card>
    )
  }

  const renderNavBar = (): ReactNode => {
    return (
      <Navbar  bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">eBay Controller</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

  return (
    <div style={{ backgroundColor: '#1e1e20', height: '100vh', width: '100vw', textAlign: 'center' }}>
      {renderNavBar()}
      <Container style={{height: '100vh', margin: 'auto'}}>
        <Row>
          <Col xs={2} style={{ backgroundColor: '#222'}}>
            <ListGroup>
              <ListGroup.Item action >Publish Inventory</ListGroup.Item>
              <ListGroup.Item action >Bulk Publish Inventory</ListGroup.Item>
              <ListGroup.Item action >Get Photos</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={10}>
            {renderGetPhotoCard()}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
