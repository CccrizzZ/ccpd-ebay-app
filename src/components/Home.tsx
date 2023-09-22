import React, {useState, ReactNode} from 'react'
import { 
  Button, 
  Stack,
  Container,
  Row,
  Col,
  Navbar,
  Form,
  InputGroup,
  ButtonGroup
} from 'react-bootstrap';
// import fs from 'fs'
// import axios from 'axios'
import PublishInventory from './PublishInventory'
import BulkPublishInventory from './BulkPublishInventory';
import PhotoComponent from './PhotoComponent';

export default function Home() {
  // const [inventoryItemArr, setInventoryItemArr] = useState()
  // const [localPhotoDBPath, setLocalPhotoDBPath] = useState()
  const [currentComponent, setCurrentComponent] = useState(0)

  // - SKU File Structure
  //        - 12203.png
  //        - 1294814583.png
  //        - 1294813434.png
  //        - 1294813384.png

  const renderNavBar = (): ReactNode => {
    return (
      <Navbar style={{ userSelect: 'none' }} bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">eBay Controller</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Settings
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

  const renderComponent = () => {
    switch (currentComponent) {
      case 0:
        return <PublishInventory />
      case 1:
        return <BulkPublishInventory />
      case 2:
        return <PhotoComponent />
      default:
        break;
    }
  }

  const setComponent = (component: number) => {
    switch (component) {
      case 0:
        setCurrentComponent(0)
        break;
      case 1:
        setCurrentComponent(1)
        break;
      case 2:
        setCurrentComponent(2)
        break;
      default:
        break;
    }
  }

  return (
    <div style={{ backgroundColor: '#333', height: '100%', width: '100%', textAlign: 'left' }}>
      {renderNavBar()}
      <Container style={{height: '100vh', margin: 'auto'}}>
        <Row style={{height: '100%', margin: 'auto', width: '100%'}}>
          <Col xs={6} md={4} style={{ backgroundColor: '#222'}}>
            <ButtonGroup vertical size='lg'>
              <Button onClick={() => setComponent(0)}>📋 Publish Inventory</Button>
              <Button onClick={() => setComponent(1)}>📚 Bulk Publish Inventory</Button>
              <Button onClick={() => setComponent(2)}>💾 Get Photos</Button>
            </ButtonGroup>
          </Col>
          <Col xs={12} md={8}>
            {renderComponent()}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
