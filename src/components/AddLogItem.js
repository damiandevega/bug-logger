import React, { useState } from 'react';
import { Card, Form, Row, Col, Button, FormControl } from 'react-bootstrap';

const AddLogItem = () => {
  const [text, setText] = useState('');
  const [user, setUser] = useState('');
  const [priority, setPriority] = useState('');

  return (
    <div>
      <Card className="mt-5 mb-3">
        <Card.Body>
          <Form>
            <Row className="my-3">
              <Col>
                <Form.Control
                  placeholder="Log"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  placeholder="User"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Control
                  as="select"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="0">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </Form.Control>
              </Col>
            </Row>
            <Row className="my-3">
              <Col>
                <Button type="submit" variant="secondary" block>
                  Add Log
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddLogItem;
