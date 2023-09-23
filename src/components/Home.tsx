import React, {useState} from 'react'
import { 
  Button, 
  Row,
  Col,
  Stack
} from 'react-bootstrap';
import {PublishInventory} from './PublishInventory'
import {BulkPublishInventory} from './BulkPublishInventory';
import {PhotoComponent} from './PhotoComponent';

export default function Home() {
  const [currentComponent, setCurrentComponent] = useState(0)

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
    <div style={{ backgroundColor: '#333', textAlign: 'left' }}>
        <Row style={{ margin: 'auto', height: '100vh'}}>
          <Col xs={4} md={2} style={{ backgroundColor: '#222'}}>
            <Stack gap={3} style={{ margin: '20px'}}>
              <Button onClick={() => setComponent(0)} variant={currentComponent === 0 ? 'success' : 'primary'}>📋 Publish Inventory</Button>
              <Button onClick={() => setComponent(1)} variant={currentComponent === 1 ? 'success' : 'primary'}>📚 Bulk Publish Inventory</Button>
              <Button onClick={() => setComponent(2)} variant={currentComponent === 2 ? 'success' : 'primary'}>💾 Get Photos</Button>
            </Stack>
          </Col>
          <Col xs={14} md={10}>
            {renderComponent()}
          </Col>
        </Row>
    </div>
  )
}
