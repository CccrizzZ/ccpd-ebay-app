import React from 'react'
import { Stack, InputGroup, Form, Button } from 'react-bootstrap'

export default function PublishInventory() {

  const publish = () => {

  }

  return (
    <div style={{ backgroundColor: '#555', padding: '50px', height: '100%', width: '100%', userSelect: 'none' }}>
    <Stack direction="vertical" gap={3}>
      <div style={{ backgroundColor: '#333', padding: '50px' }}>
        <h2>📋 Publish Inventory</h2>
        <InputGroup className="mb-3">
          <InputGroup.Text id="sku-input">SKU</InputGroup.Text>
          <Form.Control
            placeholder="Type Your SKU Here..."
            aria-label="SKU"
            aria-describedby="sku-input"
          />
        </InputGroup>
        <Button variant='success' onClick={publish}>Search In Database</Button>
      </div>
      <div style={{ backgroundColor: '#333', padding: '50px', textAlign: 'center'  }}>
        <p style={{color: "#888"}}>DB Query Results Will Be Showing Here:</p>
      </div>
      <div style={{ backgroundColor: '#333', padding: '50px', textAlign: 'center'  }}>
        <p style={{color: "#888"}}>Publish Results Will Be Showing Here:</p>
      </div>
    </Stack>
  </div>
  )
}
