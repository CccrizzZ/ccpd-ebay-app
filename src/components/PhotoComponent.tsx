import React from 'react'
import { Stack, InputGroup, Form, Button } from 'react-bootstrap'

export const PhotoComponent: React.FC = (): JSX.Element => {
  // const getAllPhotosBySku = (sku: string): string[] => {
  //   const photos: string[] = []
  //   // fs.readdirSync()

  //   return photos
  // }

  // - SKU File Structure
  //        - 12203.png
  //        - 1294814583.png
  //        - 1294813434.png
  //        - 1294813384.png
  const searchBySku = (): string => {

    
    return 'sku'
  }
  
  return (
    <div style={{ backgroundColor: '#555', padding: '50px', height: '100%', width: '100%', userSelect: 'none' }}>
        <Stack direction="vertical" gap={3}>
          <div style={{ backgroundColor: '#333', padding: '50px' }}>
            <h2>💾 Find Photos By SKU</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text id="sku-input">SKU</InputGroup.Text>
              <Form.Control
                placeholder="Type Your SKU Here..."
                aria-label="SKU"
                aria-describedby="sku-input"
              />
            </InputGroup>
            <Button variant='success' onClick={searchBySku}>Search</Button>
          </div>
          <div style={{ backgroundColor: '#333', padding: '50px', textAlign: 'center'  }}>
            <p style={{color: "#888"}}>Results Will Be Showing Here:</p>
          </div>
        </Stack>
      </div>
  )
}
