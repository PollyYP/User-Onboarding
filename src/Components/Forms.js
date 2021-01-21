import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function Forms() {
  const defaultState = {
    name: "",
    email: "",
    password: "",
    agree: false,
  };
  const [form, setForm] = useState(defaultState);

  const handleChange = (event) => {
    const { checked, value, name, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: valueToUse });
  };

  return (
    <Form className="forms">
      <FormGroup row>
        <Label for="exampleName" sm={2}>
          Name
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="name"
            id="exampleName"
            onChage={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            onChage={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>
          Password
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="text"
            id="examplePassword"
            onChage={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="checkbox2" sm={2}></Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" /> Terms of Service
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}
